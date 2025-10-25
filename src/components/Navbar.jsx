import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo_spin from "../assets/logo-spin.mp4";

export default function Navbar({
  neverHide = false,
  forceBlur = false,
  blurTriggerId,
  blurTriggerOffset = 0,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const vidRef = useRef(null);


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

        if (!blurTriggerId && !forceBlur) {
          const nextScrolled = y > SHOW_BG_AT;
          if (nextScrolled !== scrolled) setScrolled(nextScrolled);
        }

        if (!neverHide) {
          let nextHidden = hidden;
          if (y <= 0) nextHidden = false;
          else if (goingDown && y > HIDE_AFTER) nextHidden = true;
          else if (goingUp) nextHidden = false;
          if (nextHidden !== hidden) setHidden(nextHidden);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);å
  }, [hidden, scrolled, neverHide, blurTriggerId, forceBlur]);

  useEffect(() => {
    if (!blurTriggerId) return;

    const el = document.getElementById(blurTriggerId);
    if (!el) return;

    const computeTriggerTop = () =>
      el.getBoundingClientRect().top + window.scrollY;

    let triggerTop = computeTriggerTop();

    const onScroll = () => {
      const past = window.scrollY + blurTriggerOffset >= triggerTop;
      setScrolled(past);
    };

    const onResize = () => {
      triggerTop = computeTriggerTop();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [blurTriggerId, blurTriggerOffset]);

  useEffect(() => {
    vidRef.current?.play().catch(() => {});
  }, []);

  const isHidden = neverHide ? false : hidden;
  const blurOn = forceBlur || scrolled;

  return (
    <nav
      className={[
        "font-display fixed top-0 left-0 w-full z-50 px-10 py-2 pt-3",
        "flex items-center justify-between transition-transform duration-300 ease-out border-b border-white/10",
        blurOn ? "backdrop-blur-md bg-[#101820]/65" : "bg-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0",
        "will-change-transform",
      ].join(" ")}
      onFocusCapture={() => !neverHide && setHidden(false)}
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
            preload="metadata"
          />
        </Link>
      </div>

      {/* Links */}
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
