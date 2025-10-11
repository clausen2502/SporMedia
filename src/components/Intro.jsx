// src/components/Intro.jsx
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Threads from "../reactBits/thread.jsx"
import TextType from "../reactBits/typing.jsx";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative w-screen min-h-[100svh] overflow-hidden text-white flex flex-col items-center justify-center"
    >

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6 max-w-3xl flex-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          <TextType
            text="Spor gerir íþróttir að upplifun"
            speed={70}
            showCursor={false}
          />
        </h1>

        <p className="mt-6 text-lg text-[#F8FAFC]">
          Hnitmiðuð og fagleg markaðsþjónusta sérsniðin fyrir þitt íþróttafélag
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <HashLink
            smooth
            to="#hafa-samband"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-[#FEE715] text-black hover:opacity-60 transition">
            Hafa Samband
          </HashLink>
          <Link to="verkefni" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-[#FEE715] text-white hover:border-white/40 transition">
            Skoða Verkefni
          </Link>
          <Link to="/verkefni" className="nav-link">
          Verkefni
          </Link>
        </div>
      </div>

      <HashLink
        smooth
        to="/#um-okkur"
        className="absolute bottom-6 flex flex-col items-center gap-2 text-white/70 hover:text-white transition">
        <span className="uppercase tracking-widest text-sm font-medium">
          SJÁ MEIRA
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </HashLink>
    </section>
  );
}
