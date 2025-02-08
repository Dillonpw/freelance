import { Menu, Home, Briefcase, Award, GitBranch, MessageCircle, Mail } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Benefits", href: "#benefits", icon: Award },
  { name: "Process", href: "#process", icon: GitBranch },
  { name: "Testimonials", href: "#testimonials", icon: MessageCircle },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Nav() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center text-gray-700 hover:bg-gray-200 rounded-md p-2 focus:outline-rounded-md focus:outline-gray-400"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="absolute right-0 mt-4 w-80 z-100 rounded-md border bg-emerald-50 p-2 shadow-lg"
          sideOffset={8}
          align="end"
        >
          {menuItems.map((item, index) => (
            <div key={item.name}>
              <DropdownMenu.Item
                asChild
                className="flex items-center w-full cursor-pointer rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
              >
                <a href={item.href} className="flex items-center w-full">
                  <item.icon className="h-4 w-4 mr-2" />
                  <span>{item.name}</span>
                </a>
              </DropdownMenu.Item>
              {index < menuItems.length - 1 && <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />}
            </div>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

