// src/components/UmOkkur.jsx
import TextType from "../reactBits/typing.jsx";
import isak from "../assets/isak.svg";
import oskar from "../assets/oskar.svg";
import mirza from "../assets/mirza.svg";

const people = [
  { name: "Ísak",  title: "Framkvæmdastjóri (Web Development)", img: isak },
  { name: "Óskar", title: "Framkvæmdastjóri (CTO)",             img: oskar },
  { name: "Mirza", title: "Framkvæmdastjóri (CEO)",             img: mirza },
];

export default function UmOkkur() {
  return (
    <section id="umokkur" className="relative text-white overflow-hidden">
      {/* 🔹 Top gradient divider (matches Þjónustan) */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Typing Header (same component & sizing) */}
        <div className="text-center mb-14">
          <TextType
            text="Hverjir erum við?"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            speed={70}
            startOnVisible={true}
            showCursor={false}
          />
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Teymið á bak við verkefnin
          </p>
        </div>

        {/* 👥 Team cards grid — same card shell as services */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {people.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/10
                         backdrop-blur-sm transition-transform motion-safe:duration-300
                         hover:-translate-y-1 hover:border-white/25"
            >
              {/* Glow on hover*/}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 
                              transition-opacity motion-safe:duration-300 group-hover:opacity-100
                              bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),rgba(0,0,0,0))]" />

              <div className="relative z-10">
                {/* Smaller avatar */}
                <div className="mx-auto mb-5 h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden 
                                border border-white/10 bg-white/[0.02]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70 text-center">{p.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
