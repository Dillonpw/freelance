import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-32 lg:py-38">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-xl font-bold text-teal-600 md:mb-20 md:text-4xl">
          Get in Touch
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 ml-1 block font-semibold text-teal-700 md:text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-teal-300 px-3 py-2 text-teal-700 focus:border-teal-500 focus:bg-gray-50 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 ml-1 block font-semibold text-teal-700 md:text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-teal-300 px-3 py-2 text-teal-700 focus:border-teal-500 focus:bg-gray-50 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 ml-1 block font-semibold text-teal-700 md:text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-teal-300 px-3 py-2 text-teal-700 focus:border-teal-500 focus:bg-gray-50 focus:outline-none"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="cursor-pointer rounded-lg bg-teal-600 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-teal-700 md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
