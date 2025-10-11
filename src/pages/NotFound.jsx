import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
  return (
    <div className="relative min-h-[100svh] w-screen overflow-hidden bg-[#101820] text-white">
      {/* Top nav */}
      <Navbar />

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
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-[#FEE715] text-black hover:opacity-90 transition"
            >
              Fara á forsíðu
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}