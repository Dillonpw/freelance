import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useFrame,
  type Object3DNode,
} from "@react-three/fiber";
import { shaderMaterial, OrbitControls } from "@react-three/drei";

declare module "@react-three/fiber" {
  interface ThreeElements {
    fluidMaterial: Object3DNode<typeof FluidMaterial, typeof FluidMaterial>;
  }
}

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;
  uniform float uTime;
  
  //	Classic Perlin 3D Noise 
  //	by Stefan Gustavson
  //
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  
  float cnoise(vec3 P){
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
  }

  void main() {
    // Increase noise complexity for more organic movement
    vec3 noiseCoord = position * 0.3 + uTime * 0.3;
    float noise1 = cnoise(noiseCoord);
    float noise2 = cnoise(noiseCoord * 1.5 + vec3(10.0, 20.0, 30.0));
    
    // Create multi-layered displacement with different frequencies
    float displacement = noise1 * 0.5 + noise2 * 1.5;
    
    // More pronounced edge warping
    float distanceFromCenter = length(position) / 6.0;
    float edgeInfluence = smoothstep(0.0, 1.0, distanceFromCenter);
    
    // Exaggerate surface tension effect
    vec3 newPosition = position + normal * displacement * edgeInfluence * 2.0;
    
    vDisplacement = displacement * edgeInfluence;
    vNormal = normalize(normal + displacement * 0.5);
    vPosition = newPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;
  uniform vec3 uBaseColor;
  uniform vec3 uAccentColor;
  uniform float uTime;

  void main() {
    // Softer lighting direction
    vec3 lightDirection = normalize(vec3(
      sin(uTime * .1), 
      cos(uTime * .1), 
      1.5  // Increased z component for softer angles
    ));
    
    // Adjusted lighting range for less contrast
    float lightIntensity = dot(vNormal, lightDirection) * .3 + 1.0; 
    
    // Softened fresnel effect
    float fresnel = pow(1.0 - max(0.0, dot(normalize(-vPosition), vNormal)), 3.0); 
    
    // More subtle color mixing
    vec3 color = mix(
      uBaseColor, 
      uAccentColor, 
      sin(vDisplacement * 3.0 + uTime) * .08 + .08 
    );
    
    // Softened final color blend
    color = mix(
      color * lightIntensity,
      (uBaseColor + uAccentColor) * 0.5,
      fresnel * 0.4  // Reduced fresnel influence
    );
    
    gl_FragColor = vec4(color, 0.85 + fresnel * 0.15);  // Adjusted opacity range
  }
`;

const FluidMaterial = shaderMaterial(
  {
    uTime: 0,
    uBaseColor: new THREE.Color(0x6ee7b7), // Tailwind teal-600
    uAccentColor: new THREE.Color(0xd1fae5), // Tailwind teal-300
  },
  vertexShader,
  fragmentShader,
);

extend({ FluidMaterial });

export default function Three() {
  const FluidSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const materialRef = useRef<typeof FluidMaterial>(null!);
    const [sphereScale, setSphereScale] = useState(() => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 640) return 1.6;
        if (width < 1024) return 2.2;
        return 2.6;
      }
      return 1.6;
    });

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setSphereScale(1.6);
        } else if (width < 1024) {
          setSphereScale(2.2);
        } else {
          setSphereScale(2.6);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useFrame((state) => {
      if (materialRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (materialRef.current as any).uniforms.uTime.value =
          state.clock.elapsedTime;
      }
    });

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[sphereScale, 256, 256]} />
        <fluidMaterial ref={materialRef} />
      </mesh>
    );
  };

  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov:
          typeof window !== "undefined"
            ? window.innerWidth < 640
              ? 40
              : 50
            : 50,
      }}
      className="h-fit w-full"
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
      <FluidSphere />
    </Canvas>
  );
}
