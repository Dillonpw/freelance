import * as motion from "motion/react-client";
import Three from "./three";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-emerald-50">
      <Three />
      <div className="absolute inset-0 z-1 flex flex-col items-center justify-center px-4">
        <motion.h1
          className="mb-4 text-center text-4xl font-bold drop-shadow-[0_1.2px_2.2px_rgba(255,255,255,0.8)] md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your <br className="md:hidden" />
          Internet Presence
        </motion.h1>
        <motion.p
          className="text-md mx-10 mb-8 text-center drop-shadow-[0_1.2px_1.6px_rgba(255,255,255,1)] md:text-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fast and Captivaing Websites Tailored To Your Needs
        </motion.p>
      </div>
    </section>
  );
}
