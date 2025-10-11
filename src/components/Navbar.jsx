import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo_spin from "../assets/logo-spin.mp4"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const vidRef = useRef(null);


  // thresholdsc
  const SHOW_BG_AT = 60;
  const HIDE_AFTER = 200;
  const DELTA = 5;


  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(y > 60);
          const prev = lastY.current;
          const goingDown = y > prev + 5;
          const goingUp = y < prev - 5;
          if (y <= 0) setHidden(false);
          else if (goingDown && y > 200) setHidden(true);
          else if (goingUp) setHidden(false);
          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    vidRef.current?.play().catch(() => {});
  }, []);

  return (
    <nav
      className={[
        "font-display fixed top-0 left-0 w-full z-50 px-10 py-2 pt-3",
        "flex items-center justify-between transition-all duration-300 ease-out border-b border-white/30",
        scrolled ? "backdrop-blur-md border-white/30" : "bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0",
        "will-change-transform"
      ].join(" ")}
      onFocusCapture={() => setHidden(false)} // show if user tabs to nav
    >
      {/* Logo */}
      <div
        className="relative inline-block w-[200px] h-[60px] -ml-10">
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
            preload="auto"
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex item€s-center gap-12 text-white">
        <HashLink smooth to="/#um-okkur" className="nav-link">
          Um Okkur
        </HashLink>
        <a href="/#verkefni" className="nav-link">
          Verkefni
        </a>
        <HashLink smooth to="/#hafa-samband" className="nav-link-samband">
          Hafa Samband
        </HashLink>
      </div>
    </nav>
  );
}
