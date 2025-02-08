"use client"

import { motion } from "framer-motion"
import { MessageCircle, FileText, Palette, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  {
    title: "Consultation",
    description: "We discuss your project goals and requirements.",
    icon: MessageCircle,
  },
  {
    title: "Proposal",
    description: "I provide a detailed plan and quote for your project.",
    icon: FileText,
  },
  {
    title: "Design",
    description: "We collaborate on the perfect design for your website.",
    icon: Palette,
  },
  {
    title: "Development",
    description: "I bring the design to life with clean, efficient code.",
    icon: Code,
  },
  {
    title: "Testing",
    description: "Rigorous testing ensures a flawless user experience.",
    icon: TestTube,
  },
  {
    title: "Launch",
    description: "Your website goes live, fully optimized and ready to impress.",
    icon: Rocket,
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-teal-600">My Process</h2>
        <div className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="mb-8 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                <step.icon className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-teal-800">{step.title}</h3>
                <p className="text-teal-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

