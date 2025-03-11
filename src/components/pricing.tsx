import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    title: "Starting at",
    price: 1600,
    description: "Perfect for small businesses just getting started online.",
    features: [
      "Custom responsive design",
      "Single Page style or standard 5 pages",
      "Contact form",
      "Basic SEO optimization",
      "Mobile-friendly layout",
      "You control and own your website",
      "Maintenance requests at an additional rate of 50$/hour",
    ],
    highlighted: false,
  },
  //   {
  //     title: "Professional",
  //     price: 2499,
  //     description: "Ideal for established businesses looking to grow their online presence.",
  //     features: [
  //       "Everything in Basic",
  //       "Up to 10 pages",
  //       "Blog integration",
  //       "Social media integration",
  //       "Google Analytics setup",
  //       "Advanced SEO optimization",
  //       "Content management system"
  //     ],
  //     highlighted: true
  //   },
  //   {
  //     title: "Enterprise",
  //     price: 3999,
  //     description: "Comprehensive solution for businesses with complex web needs.",
  //     features: [
  //       "Everything in Professional",
  //       "Unlimited pages",
  //       "E-commerce functionality",
  //       "Custom web applications",
  //       "Payment gateway integration",
  //       "Advanced animations",
  //       "Monthly maintenance included"
  //     ],
  //     highlighted: false
  //   }
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="from-none bg-gradient-to-b to-white py-20 md:py-32 lg:py-38"
    >
      <div className="container mx-auto px-4">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-bold text-teal-600 md:text-4xl"
        >
          Invest in Your Business
        </motion.h6>
        <div className="flex flex-col items-center justify-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className={`relative rounded-lg md:mx-20 max-w-3xl ${
                plan.highlighted
                  ? "bg-teal-100 shadow-xl"
                  : "bg-white shadow-lg"
              } overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> MOST POPULAR
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-teal-800">
                  {plan.title}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-teal-600">
                    ${plan.price}
                  </span>
                </div>
                <p className="mb-6 text-teal-700">{plan.description}</p>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-500" />
                      <span className="text-teal-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full rounded-md ${
                    plan.highlighted
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-teal-100 text-teal-800 hover:bg-teal-200"
                  } py-3 font-medium transition-colors`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-teal-700 md:text-lg">
            Need something custom?{" "}
            <a
              href="/contact"
              className="font-medium text-teal-600 underline hover:text-teal-800"
            >
              Contact me
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
