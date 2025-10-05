import { Globe, Palette, Sparkles, Megaphone } from "lucide-react";
import TextType from "../reactBits/typing.jsx";

const items = [
  {
    title: "Vefsíðugerð",
    icon: Globe,
    desc: "Hraðar og hreinar síður sem breyta gestum í viðskiptavini.",
    bullets: ["React/Vite + Tailwind", "SEO grunnur", "Netverslun (valfrjálst)"],
  },
  {
    title: "Grafísk hönnun",
    icon: Palette,
    desc: "Stíll sem passar vörumerkinu – á skjá og í prentun.",
    bullets: ["Myndrænt efni", "Plaköt & prent", "Snið fyrir samfélagsmiðla"],
  },
  {
    title: "Branding",
    icon: Sparkles,
    desc: "Skýr sjálfsmynd sem fólk man – frá lógói til litaspjalds.",
    bullets: ["Lógó & merki", "Litaspjald & letur", "Notkunarleiðbeiningar"],
  },
  {
    title: "Auglýsingar & birtingar",
    icon: Megaphone,
    desc: "Við finnum fólkið þitt – og mælum árangurinn.",
    bullets: ["Meta & Instagram Ads", "Google Ads", "Birtingaáætlun & skýrslur"],
  },
];

export default function Services() {
  return (
    <section id="thonusta" className="relative bg-black text-white overflow-hidden">
      {/* 🔹 Top gradient divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* 🩵 Typing Header */}
        <div className="text-center mb-14">
          <TextType
            text="Þjónustan okkar"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            speed={70}
            startOnVisible={true}
            showCursorAfterDone={false}
          />
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Við hjálpum fyrirtækjum, íþróttafélögum og einstaklingum að sjást – faglega og markvisst.
          </p>
        </div>

        {/* ⚡ Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map(({ title, icon: Icon, desc, bullets }) => (
            <article
              key={title}
              className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/10
                         backdrop-blur-sm transition-transform motion-safe:duration-300
                         hover:-translate-y-1 hover:border-white/25"
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 
                              transition-opacity motion-safe:duration-300 group-hover:opacity-100
                              bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),rgba(0,0,0,0))]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white/5 border border-white/10">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>

                <p className="mt-3 text-white/70">{desc}</p>

                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Soft line inside card */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="#hafa-samband"
                    className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Fá tilboð
                  </a>
                  <a
                    href="#verkefni"
                    className="text-sm text-white/70 hover:text-white/90 transition"
                  >
                    Sjá dæmi
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🔹 Bottom gradient divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
    </section>
  );
}
