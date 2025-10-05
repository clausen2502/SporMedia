import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Beams from "../reactBits/beams.jsx";
import TextType from "../reactBits/typing.jsx";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative bg-black text-white min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* 🔵 Background animation */}
      <div className="absolute inset-0 z-0">
        <Beams
          className="!absolute inset-0 h-full w-full"
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#3B82F6"
          speed={2}
          noiseIntensity={1.5}
          scale={0.25}
          rotation={0}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <TextType
          text="Ertu klár í að láta þig sjást?"
          className="text-4xl font-bold sm:text-6xl"
          speed={60}
        />

        <p className="mt-6 text-lg text-white/80">
          Vertu sýnilegri með faglegri nálgun í markaðssetningu og miðlun.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <HashLink
            smooth
            to="/#hafa-samband"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:opacity-70 transition"
          >
            Hafa Samband
          </HashLink>

          <Link
            to="/verkefni"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-white/30 text-white hover:border-white/80 transition"
          >
            Skoða Verkefni
          </Link>
        </div>
      </div>

      {/* 🌙 Soft gradient divider anchored to bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px
                   bg-gradient-to-r from-white/0 via-white/25 to-white/0"
      />
    </section>
  );
}
