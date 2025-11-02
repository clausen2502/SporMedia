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
      {/* Background Threads */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Threads
          amplitude={1}
          distance={0.5}
          enableMouseInteraction={true}
          color={[254/255, 231/255, 21/255]}
        />
      </div>
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6 max-w-3xl flex-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          <TextType
            text="Þitt Spor byrjar hér"
            speed={70}
            showCursor={false}
          />
        </h1>

        <p className="mt-6 text-lg text-[#F8FAFC]">
          Spor hjálpar fyrirtækjum með markaðstengd verkefni á öllum sviðum
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <HashLink
            smooth
            to="#hafa-samband"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-[#FEE715] text-black hover:opacity-60 transition">
            Hafa Samband
          </HashLink>
          <Link to="verkefni" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-[#FEE715] text-white hover:border-white/40 transition bg-[#101820]">
            Skoða Verkefni
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
