import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-18 px-10 flex items-center justify-between transition-colors duration-300 ${scrolled ? "bg-[var(--color--cream)] shadow-md" : "bg-transparent"}`}>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <img src={logo} alt="Spor Logo" className="h-[100px]" />
      </Link>
      <div className="flex items-center gap-20">
        <HashLink smooth to="/#um-okkur" className="nav-link">Um okkur</HashLink>
        <a href="/blog" className="nav-link">Blogg</a>
        <HashLink smooth to="/#hafa-samband" className="nav-link">Hafa samband</HashLink>
      </div>
    </nav>
  );
}
