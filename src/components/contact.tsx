import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // For Netlify Forms encode the form data
      const formData = new FormData();
      formData.append("form-name", "contact");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }

      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-32 lg:py-38">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-xl font-bold text-teal-600 md:mb-20 md:text-4xl">
          Get in Touch
        </h2>
        {isSubmitted ? (
          <motion.div
            className="mx-auto max-w-lg rounded-lg bg-teal-50 p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-teal-700">
              Thank You!
            </h3>
            <p className="text-teal-600">
              Your message has been received. We'll get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 rounded-lg bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            // These attributes are required for Netlify Forms
            data-netlify="true"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
          >
            {/* Netlify Form detection */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field to prevent spam */}
            <div className="hidden">
              <input name="bot-field" />
            </div>

            {error && (
              <div className="mb-6 rounded-md bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

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
                name="name"
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
                name="email"
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
                name="message"
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
                className="cursor-pointer rounded-lg bg-teal-700 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-teal-800 disabled:bg-teal-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
