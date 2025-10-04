// src/components/Intro.jsx
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Beams from "../reactBits/beams.jsx"; // radiant beams background

export default function Intro() {
  return (
    <section id="intro" className="relative bg-black text-white min-h-[100svh] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          className="!absolute inset-0 h-full w-full"
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#3B82F6"   // blue-ish beams like in screenshot
          speed={2}
          noiseIntensity={1.5}
          scale={0.25}
          rotation={0}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hvernig lítur fyrirtækið þitt út á við?
        </h1>

        <p className="mt-6 text-lg text-white/80">
          Ert þú með fyrirtæki, félag eða einstaklingur sem ert að gera vel en veist ekkert í tæknimálum?
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <HashLink
            smooth
            to="/#hafa-samband"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:opacity-90 transition"
          >
            Hafa Samband
          </HashLink>
          <Link
            to="/verkefni"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-white/30 text-white hover:border-white/60 transition"
          >
            Skoða Verkefni
          </Link>
        </div>
      </div>
    </section>
  );
}
