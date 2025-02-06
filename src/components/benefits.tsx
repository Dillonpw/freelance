"use client"

import * as motion from "motion/react-client"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Customized solutions tailored to your specific needs",
  "Flexible scheduling and faster project turnaround",
  "Direct communication and personalized attention",
  "Cost-effective without compromising on quality",
  "Diverse skill set to handle various project requirements",
  "Ongoing support and maintenance",
]

export default function Benefits() {
  return (
    <section className="py-20 bg-teal-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose a Freelance Web Developer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-teal-300 mr-4 flex-shrink-0 mt-1" />
              <p className="text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

