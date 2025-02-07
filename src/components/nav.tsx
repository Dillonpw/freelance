import { Menu } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Benefits", href: "#benefits" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center text-gray-700 hover:text-gray-900 rounded-md p-2 focus:outline-rounded-md focus:outline-gray-400"
          aria-label="Toggle menu"
        >
            <Menu className="h-6 w-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="absolute right-0 mt-4 w-80 z-100 rounded-md border bg-white p-2 shadow-lg"
          sideOffset={8}
          align="end"
        >
          {menuItems.map((item, index) => (
            <div key={item.name}>
              <DropdownMenu.Item
                asChild
                className="block cursor-pointer rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none"
              >
                <a href={item.href}>{item.name}</a>
              </DropdownMenu.Item>
              {index < menuItems.length - 1 && (
                <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
              )}
            </div>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
