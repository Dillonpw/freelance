import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [{ name: "Privacy Policy", href: "/privacy" }],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="flex justify-center bg-emerald-300">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">BRAND</h2>
            <p className="mb-4 md:text-lg">
              Crafting digital experiences that inspire and innovate.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-1 transition-all duration-300 hover:bg-teal-700"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-semibold md:text-xl">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="transition-colors duration-300 hover:underline md:text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between pt-8 md:flex-row md:text-lg">
          <p>&copy; {new Date().getFullYear()} BRAND. All rights reserved.</p>
          <div className="mt-4 flex items-center md:mt-0">
            <Mail className="mr-2 h-6 w-6" />
            <a
              href="mailto:contact@brand.com"
              className="hover:underline md:text-lg"
            >
              contact@brand.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
