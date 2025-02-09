import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    icon: Code,
    description:
      "Tailor-made websites that perfectly align with your brand and goals.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    description:
      "Ensure your site looks great and functions flawlessly on all devices.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Create intuitive, engaging user experiences that keep visitors coming back.",
  },
  {
    title: "Performance Optimization",
    icon: Zap,
    description:
      "Boost your site's speed and efficiency for better user satisfaction and SEO.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-32 lg:py-38">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-bold text-emerald-600 md:mb-20 md:text-4xl"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-18">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="rounded-lg bg-emerald-50 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="mb-3 h-6 w-6 text-teal-600" />
                  <h3 className="mb-2 text-lg font-semibold text-teal-800 md:text-xl">
                    {service.title}
                  </h3>
                </div>
                <p className="text-teal-700 md:text-lg">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
