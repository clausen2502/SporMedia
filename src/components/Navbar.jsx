import { useEffect, useState } from "react";
import logo from "../assets/logoV3.0.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-10 py-4 flex items-center justify-between border-b border-white/20 bg-black transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={logo} alt="Spor Logo" className="h-[40px] nav-logo" />
      </Link>

      {/* Links */}
      <div className="flex items-center gap-12">
        <HashLink smooth to="/#um-okkur" className="nav-link">
          UM OKKUR
        </HashLink>
        <a href="/blog" className="nav-link">
          VERKEFNI
        </a>
        <HashLink smooth to="/#hafa-samband" className="nav-link">
          HAFA SAMBAND
        </HashLink>
      </div>
    </nav>
  );
}
