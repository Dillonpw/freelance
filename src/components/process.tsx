"use client"

import * as motion from "motion/react-client"

const steps = [
  { title: "Consultation", description: "We discuss your project goals and requirements." },
  { title: "Proposal", description: "I provide a detailed plan and quote for your project." },
  { title: "Design", description: "We collaborate on the perfect design for your website." },
  { title: "Development", description: "I bring the design to life with clean, efficient code." },
  { title: "Testing", description: "Rigorous testing ensures a flawless user experience." },
  { title: "Launch", description: "Your website goes live, fully optimized and ready to impress." },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-600">My Process</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-teal-800 mb-2">{step.title}</h3>
                <p className="text-teal-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

