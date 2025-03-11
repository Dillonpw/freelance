import * as motion from "motion/react-client";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Personalized web solutions designed specifically for your business goals",
  "Adaptable timelines and quicker delivery compared to larger agencies",
  "Work directly with your developer - no middlemen or communication barriers",
  "Professional results at competitive freelance rates",
  "Versatile expertise covering design, development, and optimization",
  "Reliable post-launch support and website maintenance services",
];

//TODO: add icons maybe

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 lg:py-38">
      <div className="container mx-auto px-4">
        <h5 className="mb-12 text-center text-2xl font-bold md:mb-20 md:text-4xl">
          Is a Freelance Web Developer Right for You?
        </h5>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-18">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="mr-2 h-1lh flex-shrink-0 text-teal-300" />
              <p className="text-md md:text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
