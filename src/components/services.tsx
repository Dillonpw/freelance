"use client"

import * as motion from "motion/react-client"
import { Code, Palette, Smartphone, Zap } from "lucide-react"

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
]

export default function Services() {
  return (
    <section  id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-600">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-teal-50 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-teal-800">{service.title}</h3>
              <p className="text-teal-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

