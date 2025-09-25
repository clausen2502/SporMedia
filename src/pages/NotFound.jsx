import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#5a3d2b]/20 bg-[var(--color--cream)]">
        {/* top accent line */}
        <div className="h-1 w-full bg-[#5a3d2b]" />

        {/* subtle vignette */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_30%,#d6c7b8_0%,transparent_60%)]" />

        <div className="px-8 py-12 text-center">
          <p className="tracking-widest text-xs uppercase text-[#5a3d2b]/60">
            Villa 404
          </p>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-[#5a3d2b]">
            Síða fannst ekki
          </h1>

          <p className="mt-4 text-[#5a3d2b]/80 md:text-lg">
            Slóðin sem þú reyndir er ekki til eða hefur verið flutt.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-[#5a3d2b] hover:bg-[#4c3325] transition"
            >
              Fara á forsíðu
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-[#5a3d2b]/30 text-[#5a3d2b] hover:bg-[#5a3d2b]/5 transition"
            >
              Lesa bloggið
            </Link>
          </div>

          <p className="mt-10 text-sm text-[#5a3d2b]/60">
            Ef þú heldur að þetta sé villa, reyndu að endurhlaða síðuna eða farðu til baka.
          </p>
        </div>

        {/* bottom rounded footer edge to echo your site cards */}
        <div className="h-4 w-full bg-[#5a3d2b]/10" />
      </div>
    </div>
  );
}
