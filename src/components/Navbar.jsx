import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import camera_flash from "../assets/camera-flash1.mp4";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const vidRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = () => {
    if (vidRef.current) {
      vidRef.current.currentTime = 0;
      vidRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="bg-black">
      <nav
        className={`font-display relative z-50 px-10 py-2 pt-5 flex items-center justify-between border-b border-white/70 bg-black transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-3 h-px bg-white/70" />

        <div
          onMouseEnter={handleEnter}
          className="relative inline-block w-[200px] h-[60px]"
        >
          <Link
            to="/"
            className="block w-full h-full relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Thick line above logo */}
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

        <div className="flex items-center gap-12">
          <HashLink smooth to="/#um-okkur" className="nav-link font-display">
            UM OKKUR
          </HashLink>
          <a href="/blog" className="nav-link">
            VERKEFNI
          </a>
          <HashLink smooth to="/#hafa-samband" className="nav-link font-display">
            HAFA SAMBAND
          </HashLink>
        </div>
      </nav>
    </div>
  );
}
