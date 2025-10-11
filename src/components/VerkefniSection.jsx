import { ExternalLink, Globe, Camera, Sparkles } from "lucide-react";
import TextType from "../reactBits/typing.jsx";
import Vidskiptavinir from "../components/VidskiptavinirSection.jsx";
import ultra_logo from "../assets/ultra_white.png"
import ElectricLinesBox from "../animation/ElectricLinesBox.jsx"
import BreidablikMp4 from "../assets/breidablik.mp4"
import SnerpaMp4 from "../assets/snerpa.mp4"

const projects = [
  {
    name: "Snerpa Coaching",
    role: ["Samfélagsmiðlar", "Efnisgerð"],
    icon: Camera,
    blurb:
      "Við sjáum um samfélagsmiðlanna hjá Snerpu Coaching sem er fótboltaþjálfunarfyrirtæki.",
    link: "https://www.instagram.com/snerpacoaching/",
    website: "https://breidablik.is/"
  },
  {
    name: "Breiðablik",
    role: ["Samfélagsmiðlar", "Efnisgerð"],
    icon: Camera,
    blurb:
      "Við gerum fagleg myndbönd, leikjaumfjöllun og daglega birtingu á alls konar efni sem styrkir ímynd Breiðabliks.",
    link: "https://www.instagram.com/breidablikfc/",
    website: "https://www.snerpacoaching.is/"
  },
  {
    name: "Ultra International",
    role: ["Vefsíðugerð", "SEO grunnur"],
    icon: Globe,
    blurb:
      "Ultra International er íslenskt fatamerki. Við hönnuðum vefsíðunna þeirra og þjónustum hana.",
    link: "https://ultrainternational.com",
  },
  {
    name: "Merkiverk",
    role: ["Vefsíðugerð", "Branding stuðningur"],
    icon: Sparkles,
    blurb:
      "Stafræn endurnýjun: stílhrein síða sem sýnir verkefni, þjónustu og verkferla á skýran hátt.",
    link: "https://merkiverk.is"
  },
];

const HIDDEN = new Set(["Ultra International", "Merkiverk"]);
const visibleProjects = projects.filter(p => !HIDDEN.has(p.name));


export default function VerkefniSection() {
  return (
    <section id="verkefni" className="relative text-white overflow-hidden">
      {/* Top divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Typing header */}
        <div className="text-center mb-3">
          <TextType
            as="h2"
            text="Viðskiptavinirnir okkar"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            speed={70}
            startOnVisible
            loop={false}
            showCursor={false}
          />
          <p className="mt-4 text-white max-w-2xl mx-auto">
            Spor tekur að sér ýmis verkefni fyrir íþróttafélög til þess að gera eftirminnilegri upplifun fyrir alla í kringum félagið
          </p>
          <Vidskiptavinir />
        </div>
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {visibleProjects.map(({ name, role, icon: Icon, blurb, link, }) => {
            const isPortrait = name === "Breiðablik" || name === "Snerpa Coaching";
            const mediaClass = isPortrait
              ? "aspect-[4/5] md:aspect-[3/4] max-h-[400px] sm:max-h-[480px]"
              : "aspect-[16/9]";
            return (
              <article
                key={name}
                className="group relative overflow-hidden rounded-2xl border border-[#FEE715] bg-[#101820]
                          backdrop-blur-sm p-6 transition-transform motion-safe:duration-300
                          hover:-translate-y-1 flex flex-col">
                {/* Media */}
                {name === "Breiðablik" ? (
                  <div className={`relative z-10 w-full overflow-hidden rounded-xl
                                  border border-white/10 bg-black/20 shrink-0 ${mediaClass}`}>
                    <video
                      className="h-full w-full object-cover object-center"
                      autoPlay muted loop playsInline preload="metadata">
                      <source src={BreidablikMp4} type="video/mp4" />
                    </video>
                  </div>
                ) : name === "Snerpa Coaching" ? (
                  <div className={`relative z-10 w-full overflow-hidden rounded-xl
                                  border border-white/10 bg-black/20 shrink-0 ${mediaClass}`}>
                    <video
                      className="h-full w-full object-cover object-center"
                      autoPlay muted loop playsInline preload="metadata">
                      <source src={SnerpaMp4} type="video/mp4" />
                    </video>
                  </div>
                ) : (name === "Ultra International" && false) ? (
                  <ElectricLinesBox
                    color="#00C7D9" lineCount={11} speed={75} glow={28}
                    className={`relative z-10 w-full rounded-xl overflow-hidden
                                border border-white/10 bg-black/30 backdrop-blur-sm ${mediaClass}`}
                  >
                    <img
                      src={ultra_logo}
                      alt="ULTRA"
                      className="absolute inset-0 m-auto w-[56%] drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                    />
                  </ElectricLinesBox>
                ) : (
                  <div className={`relative z-10 w-full overflow-hidden rounded-xl
                                  border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] ${mediaClass}`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity motion-safe:duration-300 bg-white/[0.03]" />
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 mt-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2 bg-white/5 border border-white/10">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                  </div>

                  <p className="mt-3 text-[#F8FAFC]">{blurb}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.map(r => (
                      <span key={r} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white">
                        {r}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                  <div className="mt-4 flex items-center gap-4">
                    <a href={link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80">
                      Skoða miðla <ExternalLink className="h-4 w-4" />
                    </a>
                    <a href={link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80">
                      Sjá verkefni 
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {/* Bottom divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
    </section>
  );
}
