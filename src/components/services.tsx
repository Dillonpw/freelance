"use client"

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    icon: Code,
    description: "Tailor-made websites that perfectly align with your brand and goals.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    description: "Ensure your site looks great and functions flawlessly on all devices.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Create intuitive, engaging user experiences that keep visitors coming back.",
  },
  {
    title: "Performance Optimization",
    icon: Zap,
    description: "Boost your site's speed and efficiency for better user satisfaction and SEO.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 text-center text-emerald-600">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-emerald-50 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-2 items-center">
                <Icon className="w-6 h-6 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-teal-800">
                  {service.title}
                </h3>
                </div>
                <p className="text-teal-700 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}