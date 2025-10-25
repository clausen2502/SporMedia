import TextType from "../reactBits/typing.jsx";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import isak from "../assets/isak.svg";
import oskar from "../assets/oskar.svg";
import mirza from "../assets/mirza.svg";

const people = [
  {
    name: "Ísak",
    email: "isak@spormedia.is",
    img: isak,
  },
  {
    name: "Óskar",
    email: "oskar@spormedia.is",
    img: oskar,
  },
  {
    name: "Mirza",
    email: "mirza@spormedia.is",
    img: mirza,
  },
];

export default function UmOkkur() {
  return (
    <section id="um-okkur" className="relative text-white overflow-hidden">
      {/* Top divider */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Typing Header */}
        <div className="text-center mb-14">
          <TextType
            text="Hverjir erum við?"
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            speed={70}
            startOnVisible
            showCursor={false}
          />
          <p className="mt-4 text-white max-w-2xl mx-auto">
            Metnaðarfullt teymi sem styrkir ímynd íþróttafélaga og kveikir meiri áhuga á íþróttum á Íslandi.
          </p>
        </div>

        {/* Team cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {people.map(({ name, email, role, img }) => (
            <article
              key={name}
              className="group relative rounded-2xl p-6 bg-[#101820] border border-[#FEE715]
                         transition-transform duration-300 hover:-translate-y-1 ">
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="mb-5 h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden 
                                border border-white/10 bg-[#101820]">
                  <img src={img} alt={name} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                {role && <p className="mt-1 text-sm text-white/70">{role}</p>}
                <a href={`mailto:${email}`} className="mt-1 text-sm text-white/60 hover:text-white/80 underline decoration-white/20">
                  {email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
    </section>
  );
}
