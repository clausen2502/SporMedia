import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-18 px-10 flex items-center justify-between transition-colors duration-300 ${scrolled ? "bg-[var(--color--cream)] shadow-md" : "bg-transparent"}`}>
      <img src={logo} alt="Spor Logo" className="h-30" />
      <div className="flex items-center gap-20">
        <a href="/#heim" className="nav-link">Heim</a>
        <a href="/#um-okkur" className="nav-link">Um Okkur</a>
        <a href="/blog" className="nav-link">Blogg</a>
        <a href="/#hafa-samband" className="nav-link">Hafa Samband</a>
      </div>
    </nav>
  );
}
