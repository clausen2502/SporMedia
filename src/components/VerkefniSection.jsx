import { ExternalLink, Globe, Camera, Sparkles } from "lucide-react";
import TextType from "../reactBits/typing.jsx";
import { Link } from "react-router-dom";
import Vidskiptavinir from "../components/VidskiptavinirSection.jsx";

const projects = [
  {
    name: "Snerpa Coaching",
    role: ["Vefsíðugerð", "UX/UI"],
    icon: Globe,
    blurb:
      "Fótboltaþjálfunarvettvangur með skýra upplifun: hraðar síður, skýr upplýsingaflæði og einföld skráning.",
    link: "https://snerpa.coaching", // replace with real link
  },
  {
    name: "Breiðablik",
    role: ["Samfélagsmiðlar", "Efnisgerð"],
    icon: Camera,
    blurb:
      "Við sjáum um samfélagsmiðla: myndbönd, leikjaumfjöllun og daglega birtingu sem styrkir ímynd félagsins.",
    link: "https://blikar.is", // replace with real link
  },
  {
    name: "Ultra International",
    role: ["Vefsíðugerð", "SEO grunnur"],
    icon: Globe,
    blurb:
      "Ný vefsíða með hreinni byggingu, hraðri hleðslu og grunn-SEO svo viðskiptavinir finni réttar upplýsingar hratt.",
    link: "https://ultra.example", // replace
  },
  {
    name: "Merkiverk",
    role: ["Vefsíðugerð", "Branding stuðningur"],
    icon: Sparkles,
    blurb:
      "Stafræn endurnýjun: stílhrein síða sem sýnir verkefni, þjónustu og verkferla á skýran hátt.",
    link: "https://merkiverk.example", // replace
  },
];

export default function VerkefniSection() {
  return (
    <section id="verkefni" className="relative bg-black text-white overflow-hidden">
      {/* Top divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Typing header */}
        <div className="text-center mb-3">
          <TextType
            as="h2"
            text="Verkefnin okkar"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            speed={70}
            startOnVisible
            loop={false}
            showCursor={false}
          />
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Úrval verkefna þar sem við sameinum hönnun, vef og miðlun til að skila sýnileika og árangri.
          </p>
          <Vidskiptavinir />
        </div>
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(({ name, role, icon: Icon, blurb, link }) => (
            <article
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]
                         backdrop-blur-sm p-6 transition-transform motion-safe:duration-300
                         hover:-translate-y-1 hover:border-white/25"
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 
                              transition-opacity motion-safe:duration-300 group-hover:opacity-100
                              bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),rgba(0,0,0,0))]" />

              {/* Mock cover / placeholder (replace with image if you have one) */}
              <div className="relative z-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
                {/* Optional: put <img src={yourImage} className="h-full w-full object-cover" /> here */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity motion-safe:duration-300 bg-white/[0.03]" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white/5 border border-white/10">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                </div>

                <p className="mt-3 text-white/70">{blurb}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Skoða verkefni
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  {/* If you have case pages inside your app, you can link them too */}
                  <Link
                    to="/#hafa-samband"
                    className="text-sm text-white/70 hover:text-white/90 transition"
                  >
                    Fá tilboð
                  </Link>
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
