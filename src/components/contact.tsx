"use client"

import { useState } from "react"
import * as motion from "motion/react-client"
export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { name, email, message })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-600">Get in Touch</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
<input type="hidden" name="form-name" value="contact" />

          <div className="mb-4">
            <label htmlFor="name" className="block text-teal-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-teal-700 border border-teal-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-teal-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-teal-700 border border-teal-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-teal-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-teal-700 border border-teal-300 rounded-lg focus:outline-none focus:border-teal-500"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

