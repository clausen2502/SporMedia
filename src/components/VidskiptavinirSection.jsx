// src/components/VidskiptavinirSection.jsx
import LogoScroll from "../reactBits/logoscroll";

import breidablik from "../assets/breidablikWhite.svg";
import snerpa from "../assets/snerpaWhite.svg";

const imageLogos = [
  { src: breidablik, alt: "Breiðablik", href: "https://www.instagram.com/breidablikfc/" },
  { src: snerpa,     alt: "Snerpa Coaching", href: "https://www.instagram.com/snerpacoaching/" },
];

export default function VidskiptavinirSection() {
  return (
    <section
      id="clients"
      aria-label="Viðskiptavinir"
      className=" text-white py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-22 overflow-hidden">
          <LogoScroll
            logos={imageLogos}
            speed={80}
            direction="left"
            logoHeight={72}
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
