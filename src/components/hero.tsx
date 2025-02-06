"use client"

import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Elevate Your Web Presence
        </motion.h1>
        <p className="my-4 font-semibold">
        Modern, Performant Websites tailored to your needs
        </p>
        <motion.button
          className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.06 }}        
        >
            <a href="#contact">Get Started</a>
        </motion.button>
      </motion.div>
    </section>
  )
}

