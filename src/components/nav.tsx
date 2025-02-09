import {
  Menu,
  Home,
  Briefcase,
  Award,
  GitBranch,
  MessageCircle,
  Mail,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as motion from "motion/react-client";
const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Benefits", href: "#benefits", icon: Award },
  { name: "Process", href: "#process", icon: GitBranch },
  { name: "Testimonials", href: "#testimonials", icon: MessageCircle },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Nav() {
  return (
    <nav className="relative z-10">
      {/* Horizontal menu for large screens */}
      <div className="hidden items-center justify-center space-x-6 lg:flex">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center text-gray-700 transition-colors duration-200 hover:text-emerald-600"
          >
            <item.icon className="mr-2 h-5 w-5" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>

      {/* Dropdown menu for small screens */}
      <div className="lg:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="flex items-center rounded-md p-2 text-gray-700 hover:bg-emerald-100 focus:outline-gray-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              className="z-100 mx-auto w-[100vw] rounded-b-md border-t-2 bg-white shadow-lg"
              sideOffset={8}
            >
              <motion.div
                className="py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <DropdownMenu.Item
                      asChild
                      className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100 focus:outline-none md:text-lg"
                    >
                      <a href={item.href} className="flex w-full items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.name}</span>
                      </a>
                    </DropdownMenu.Item>
                    {index < menuItems.length - 1 && (
                      <DropdownMenu.Separator className="mx-4 my-1 h-px bg-emerald-200" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
}
