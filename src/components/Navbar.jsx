import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import camera_flash from "../assets/camera-flash.mp4";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const vidRef = useRef(null);

  // thresholdsc
  const SHOW_BG_AT = 60;    // when to add blur/background
  const HIDE_AFTER = 200;
  const DELTA = 5;         // minimal movement before toggling

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // add blur once scrolled slightly
          setScrolled(y > SHOW_BG_AT);

          const prev = lastY.current;
          const goingDown = y > prev + DELTA;
          const goingUp = y < prev - DELTA;

          if (y <= 0) {
            // at very top, always visible
            setHidden(false);
          } else if (goingDown && y > HIDE_AFTER) {
            // hide when scrolling down past threshold
            setHidden(true);
          } else if (goingUp) {
            // show again when scrolling up
            setHidden(false);
          }

          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = () => {
    if (vidRef.current) {
      vidRef.current.currentTime = 0;
      vidRef.current.play().catch(() => {});
    }
  };

  return (
    <nav
      className={[
        "font-display fixed top-0 left-0 w-full z-50 px-10 py-2 pt-5",
        "flex items-center justify-between transition-all duration-300 ease-out border-b",
        scrolled ? "backdrop-blur-md bg-black/50 shadow-md border-white/30" : "bg-transparent border-white/30",
        hidden ? "-translate-y-full" : "translate-y-0",
        "will-change-transform"
      ].join(" ")}
      onFocusCapture={() => setHidden(false)} // show if user tabs to nav
    >
      {/* Top subtle hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-3 h-px bg-white/40" />

      {/* Logo / flash */}
      <div
        onMouseEnter={handleEnter}
        className="relative inline-block w-[200px] h-[60px]"
      >
        <Link
          to="/"
          className="block w-full h-full relative"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* small bar above logo */}
          <span className="pointer-events-none absolute -top-2 left-7 right-18 h-[4px] bg-white/90" />
          <video
            ref={vidRef}
            src={camera_flash}
            className="w-full h-full object-contain"
            muted
            playsInline
            preload="auto"
            onLoadedData={() => {
              if (vidRef.current) {
                vidRef.current.pause();
                vidRef.current.currentTime = 0;
              }
            }}
            onEnded={() => {
              if (vidRef.current) {
                vidRef.current.pause();
                vidRef.current.currentTime = 0;
              }
            }}
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex item€s-center gap-12 text-white">
        <HashLink smooth to="/#um-okkur" className="nav-link">
          Um Okkur
        </HashLink>
        <a href="/blog" className="nav-link">
          Verkefni
        </a>
        <HashLink smooth to="/#hafa-samband" className="nav-link-samband">
          Hafa Samband
        </HashLink>
      </div>
    </nav>
  );
}
