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
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  const SHOW_BG_AT = 60;
  const HIDE_AFTER = 200;
  const DELTA = 5;
  const NAV_H = 96;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      if (menuOpen) return;

      if (!blurTriggerId && !forceBlur) {
        const nextScrolled = y > SHOW_BG_AT;
        if (nextScrolled !== scrolled) setScrolled(nextScrolled);
      }

      if (!neverHide) {
        const prev = lastY.current;
        const goingDown = y > prev + DELTA;
        const goingUp = y < prev - DELTA;

        let nextHidden = hidden;
        if (y <= 0) nextHidden = false;
        else if (goingDown && y > HIDE_AFTER) nextHidden = true;
        else if (goingUp) nextHidden = false;

        if (nextHidden !== hidden) setHidden(nextHidden);
        lastY.current = y;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden, scrolled, neverHide, blurTriggerId, forceBlur, menuOpen]);

  useEffect(() => {
    if (!blurTriggerId) return;
    const el = document.getElementById(blurTriggerId);
    if (!el) return;

    const computeTriggerTop = () => el.getBoundingClientRect().top + window.scrollY;
    let triggerTop = computeTriggerTop();

    const onScroll = () => {
      if (menuOpen) return;
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
  }, [blurTriggerId, blurTriggerOffset, menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isHidden = neverHide ? false : hidden;
  const blurOn = forceBlur || scrolled;

  return (
    <>
      <nav
        className={[
          "font-display fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-10 py-2 pt-3",
          "flex items-center justify-between transition-transform duration-300 ease-out border-b border-white/10",
          blurOn ? "backdrop-blur-md bg-[#101820]/65" : "bg-transparent",
          isHidden ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
        onFocusCapture={() => !neverHide && setHidden(false)}
      >
        <div className="relative inline-block w-[160px] sm:w-[180px] md:w-[200px] h-[52px] md:h-[60px]">
          <Link
            to="/"
            className="block w-full h-full relative"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            aria-label="Heim"
          >
            <video
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

        <div className="hidden lg:flex items-center gap-12 text-white">
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

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white/90"
          aria-label="Opna valmynd"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-[2px] w-6 bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Simple dropdown  */}
      <div
        id="mobile-menu"
        className={[
          "lg:hidden fixed left-0 right-0 z-[45]",
          "transition-[opacity,transform] duration-200",
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
        style={{ top: `${NAV_H}px` }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <nav className="mx-auto max-w-[1280px] px-4 md:px-6 flex justify-end">
          <div className="rounded-2xl border border-white/12 bg-[#0f1720]/95 backdrop-blur-md shadow-xl w-45">
            <ul className="p-2">
              <li className="p-1">
                <HashLink
                  smooth
                  to="/#um-okkur"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-xl px-4 py-3 text-white/90 hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  Um Okkur
                </HashLink>
              </li>
              <li className="p-1">
                <Link
                  to="/verkefni"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-xl px-4 py-3 text-white/90 hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  Verkefni
                </Link>
              </li>
              <li className="p-1">
                <HashLink
                  smooth
                  to="/#hafa-samband"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-xl px-4 py-3 text-white/90 hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  Hafa Samband
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
