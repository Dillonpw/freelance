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
          className="z-100 mx-auto w-[100vw] rounded-b-md border-t-2 bg-transparent shadow-lg backdrop-blur-2xl"
          sideOffset={8}
        >
          <div className="py-2">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <DropdownMenu.Item
                  asChild
                  className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100 focus:outline-none md:text-lg lg:text-xl"
                >
                  <a href={item.href} className="flex w-full items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                </DropdownMenu.Item>
                {index < menuItems.length - 1 && (
                  <DropdownMenu.Separator className="mx-4 my-1 h-px bg-emerald-200" />
                )}
              </div>
            ))}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
