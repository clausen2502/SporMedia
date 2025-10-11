// src/components/VidskiptavinirSection.jsx
import LogoScroll from "../reactBits/logoscroll";

import breidablik from "../assets/breidablikWhite.svg";
import snerpa from "../assets/snerpaWhite.svg";

const imageLogos = [
  { src: breidablik, alt: "Breiðablik", href: "https://breidablik.is" },
  { src: snerpa,     alt: "Snerpa Coaching", href: "https://snerpacoaching.is" },
];

export default function VidskiptavinirSection() {
  return (
    <section
      id="clients"
      aria-label="Viðskiptavinir"
      className=" text-white py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-20 overflow-hidden">
          <LogoScroll
            logos={imageLogos}
            speed={80}
            direction="left"
            logoHeight={56}
            gap={48}
            pauseOnHover={false}
            scaleOnHover
            ariaLabel="Viðskiptavinir"
          />
        </div>
      </div>
    </section>
  );
}
