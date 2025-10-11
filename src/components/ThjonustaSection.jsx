import { Globe, Palette, Sparkles, Megaphone } from "lucide-react";
import TextType from "../reactBits/typing.jsx";

const items = [
  {
    title: "Vefsíðugerð",
    icon: Globe,
    desc: "Við hönnum og byggjum stílhreinar og notendavænar vefsíður fyrir íþróttafélög",
    bullets: ["Sérsniðin vefsíða fyrir félagið", "Vefhönnun í samræmi við ímynd félagsins",
      "Notendavænt stjórnkerfi fyrir fréttir, leikjadagskrá, æfingar og myndir",
      "Samþætting við samfélagsmiðla og möguleika á auglýsingum og samstarfsaðilum"],
  },
  {
    title: "Stafrænir miðlar",
    icon: Megaphone,
    desc: "Við hjálpum íþróttafélögum að skapa faglegt umhverfi á samfélagsmiðlum",
    bullets: ["Styrkja ímynd félagsins á samfélagsmiðlum", "Hönnun & framleiðsla á efni fyrir leikdaga (byrjunarlið, hálf-leikur, lokatölur, o.fl.)", "Stories, reels og lifandi efni sem sýnir stemningu og karakter liðsins", "Stjórnun samfélagsmiðla og skipulag á flæði"],
  }
];

export default function Services() {
  return (
    <section id="thonusta" className="relative text-white overflow-hidden">
      {/* Top gradient divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Typing Header */}
        <div className="text-center mb-14">
          <TextType
            text="Þjónustan okkar"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            speed={70}
            startOnVisible={true}
            showCursor={false}
          />
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Spor hjálpar íþróttaliðum að vera sýnilegri og faglegri í stafrænum heimi
          </p>
        </div>

        {/* ⚡ Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map(({ title, icon: Icon, desc, bullets }) => (
            <article
              key={title}
              className="group relative rounded-2xl p-6 bg-[#111111] border border-white/10
                         backdrop-blur-sm transition-transform motion-safe:duration-300
                         hover:-translate-y-1 hover:border-white/25">
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
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="#hafa-samband"
                    className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Hafa Samband
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
    </section>
  );
}
