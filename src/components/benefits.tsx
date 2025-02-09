import * as motion from "motion/react-client";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Customized solutions tailored to your specific needs",
  "Flexible scheduling and faster project turnaround",
  "Direct communication and personalized attention",
  "Cost-effective without compromising on quality",
  "Diverse skill set to handle various project requirements",
  "Ongoing support and maintenance",
];

//TODO: add icons maybe

export default function Benefits() {
  return (
    <section id="benefits" className="bg-emerald-300 py-20 md:py-32 lg:py-38">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold md:mb-20 md:text-4xl">
          Is a Freelance Web Developer Right for You?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-18">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-teal-300" />
              <p className="text-md md:text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
