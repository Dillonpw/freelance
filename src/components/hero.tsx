"use client"

import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-teal-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
        >
          Elevate Your Web Presence
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        >
          Expert Freelance Web Development Solutions
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  )
}

