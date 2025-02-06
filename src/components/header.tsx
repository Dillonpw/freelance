import Nav from "./nav";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      suppressHydrationWarning
      className='transition-all sticky top-0 left-0 z-50 flex lg:px-48 justify-center'
    >
      <nav
        className={`mx-1 flex items-center justify-between px-6 backdrop-blur-xl transition-all ${
          isScrolled
            ? "mt-4 h-16 w-[90%] rounded-xl bg-transparent text-black shadow-md dark:bg-neutral-900 dark:text-white"
            : "h-16 w-full dark:text-white"
        }`}
      >
        <p className="text-lg font-bold">BRAND</p>
        <Nav />
      </nav>
    </header>
  );
}
