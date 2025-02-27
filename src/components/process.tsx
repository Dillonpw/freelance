import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Palette,
  Code,
  Construction,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description:
      "We'll discuss your business goals, target audience, and specific website requirements to develop a clear project roadmap.",
    icon: MessageCircle,
  },
  {
    title: "Homework",
    description:
      "You'll share websites that inspire you, highlighting specific elements you like, which helps me understand your aesthetic preferences.",
    icon: FileText,
  },
  {
    title: "Design",
    description:
      "Based on our discussions, I'll create mockups of your website, collaborating with you to refine the design until it perfectly represents your brand.",
    icon: Palette,
  },
  {
    title: "Development",
    description:
      "I'll build your website using modern tools and best practices, ensuring it's fast-loading, accessible, and provides an exceptional user experience.",
    icon: Code,
  },
  {
    title: "Hosting",
    description:
      "Together we host your website on Netlify completely free, ensuring it's accessible from anywhere with an internet connection.",
    icon: Construction,
  },
  {
    title: "Launch",
    description:
      "Your website goes live. You Maintain 100% ownership through your personal Netlify account, ensuring you have direct control of your site forever.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 lg:py-38">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-bold text-teal-600 md:text-4xl"
        >
          Our Process
        </motion.h3>
        <div className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="mb-8 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                <step.icon className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-teal-800 md:text-xl">
                  {step.title}
                </h3>
                <p className="text-teal-700 md:text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
