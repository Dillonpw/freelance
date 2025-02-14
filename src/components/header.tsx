import Nav from "./nav";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className="sticky top-0 left-0 z-50 flex justify-center transition-all"
    >
      <nav
        className={`flex items-center justify-between px-6 backdrop-blur-xl transition-all lg:px-48 ${
          isScrolled
            ? "h-16 w-full bg-linear-to-t from-transparent from-70% to-emerald-50 text-black shadow-md"
            : "h-16 w-full"
        }`}
      >
        <img src="src/assets/logo.svg" className="h-10 w-10" alt="logo" />
        <Nav />
      </nav>
    </header>
  );
}
