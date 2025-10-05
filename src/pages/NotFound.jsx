import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
  return (
    <div className="relative min-h-[100svh] w-screen overflow-hidden bg-black text-white">
      {/* Top nav */}
      <Navbar />

      {/* Background: layered gradients + subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft color wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/25 via-[#8b5cf6]/20 to-[#22d3ee]/25 blur-3xl opacity-70" />
        {/* radial glow center-top */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_10%,rgba(99,102,241,0.35),transparent_60%)]" />
        {/* vignette for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_20%,transparent_50%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <section className="flex min-h-[60svh] flex-col items-center justify-center text-center">
          {/* Big 404 with gradient text */}
          <h1 className="select-none bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent text-[22vw] leading-none font-extrabold tracking-tight md:text-[12rem]">
            404
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80">
            Úbbs! Síðan sem þú ert að leita að fannst ekki.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:opacity-90 transition"
            >
              Fara á forsíðu
            </Link>
            <HashLink
              smooth
              to="/#hafa-samband"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-white/30 text-white hover:border-white/60 transition"
            >
              Hafa samband
            </HashLink>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
