import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo_spin from "../assets/logo-spin.mp4";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const vidRef = useRef(null);

  // thresholds
  const SHOW_BG_AT = 60;
  const HIDE_AFTER = 200;
  const DELTA = 5;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const prev = lastY.current;
        const goingDown = y > prev + DELTA;
        const goingUp = y < prev - DELTA;

        // Only update state if the value actually changes (prevents re-render spam)
        const nextScrolled = y > SHOW_BG_AT;
        if (nextScrolled !== scrolled) setScrolled(nextScrolled);

        let nextHidden = hidden;
        if (y <= 0) nextHidden = false;
        else if (goingDown && y > HIDE_AFTER) nextHidden = true;
        else if (goingUp) nextHidden = false;
        if (nextHidden !== hidden) setHidden(nextHidden);

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled, hidden]);

  useEffect(() => {
    vidRef.current?.play().catch(() => {});
  }, []);

  return (
    <nav
      className={[
        "font-display fixed top-0 left-0 w-full z-50 px-10 py-2 pt-3",
        "flex items-center justify-between transition-transform duration-300 ease-out border-b border-white/10",
        scrolled ? "backdrop-blur-md " : "bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0",
        "will-change-transform"
      ].join(" ")}
      onFocusCapture={() => setHidden(false)}
    >
      {/* Logo */}
      <div className="relative inline-block w-[200px] h-[60px] -ml-10">
        <Link
          to="/"
          className="block w-full h-full relative"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <video
            ref={vidRef}
            src={logo_spin}
            className="w-full h-full object-contain"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"     // was "auto" → lighter on scroll
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-12 text-white">
        <HashLink smooth to="/#um-okkur" className="nav-link">
          Um Okkur
        </HashLink>
        <Link to="/verkefni" className="nav-link">
          Verkefni
        </Link>
        <HashLink smooth to="/#hafa-samband" className="nav-link-samband">
          Hafa Samband
        </HashLink>
      </div>
    </nav>
  );
}
