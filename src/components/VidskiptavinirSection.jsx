// src/components/ClientsMarquee.jsx
import breidablik from "../assets/breidablikWhite.svg";
import merkiverk from "../assets/merkiverkWhite.svg";
import snerpa from "../assets/snerpaWhite.svg";

const LOGOS = [
  { name: "Breiðablik", src: breidablik },
  { name: "Merkiverk", src: merkiverk },
  { name: "Snerpa", src: snerpa },
];

export default function VidskiptavinirSection() {
  return (
    <section
      id="clients"
      aria-label="Viðskiptavinir"
      className="bg-black text-white py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="relative flex overflow-x-hidden">
          {/* Row 1 */}
          <div className="flex gap-12 animate-marquee">
          {LOGOS.concat(LOGOS).map((l, i) => (
            <img key={i} src={l.src} alt={l.name} className="h-14 opacity-80" />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
