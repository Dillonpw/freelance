import * as motion from "motion/react-client";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechStart",
    content:
      "Working with this freelance web developer was a game-changer for our startup. They delivered a stunning website that perfectly captured our vision.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, GreenCo",
    content:
      "I was impressed by the attention to detail and the ability to translate our ideas into a functional, beautiful website. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    role: "Small Business Owner",
    content:
      "As a small business owner, I appreciated the personalized approach and the value for money. My new website has significantly boosted my online presence.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-emerald-300 py-20 md:py-32 lg:py-38"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-xl font-bold md:mb-20 md:text-4xl">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-lg bg-white p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="mb-4 text-teal-700 md:text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-teal-800 md:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-teal-600 md:text-lg">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
