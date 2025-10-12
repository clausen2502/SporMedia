import DomeGallery from "../../reactBits/dome.jsx";
import TextType from "../../reactBits/typing.jsx";

export default function SnerpaSection() {
  const images = Array.from({ length: 16 }, (_, i) => `/media/snerpa/snerpa${i + 1}.jpeg`);

  return (
    <section id="snerpa" className="relative mx-auto max-w-6xl px-6 pb-8">
      <div className="mt-10 text-center">
        <TextType
          text="SNERPA COACHING"
          className="text-3xl sm:text-5xl font-bold tracking-tight"
          speed={70}
          startOnVisible={true}
          showCursor={false}
        />
        <p className="mt-2 mb-1 text-white/70 max-w-2xl mx-auto
                      opacity-0 translate-y-3 will-change-[transform,opacity]
                      animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_1200ms_forwards]">
          Myndir úr samstarfi okkar við Snerpu
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="relative w-full h-[68vh] max-h-[820px]">
          <DomeGallery
            images={images}
            fit={0.6}
            minRadius={300}
            maxVerticalRotationDeg={10}
            segments={20}
            grayscale={false}
          />
        </div>
      </div>

      {/* Partner links (yellow outline, no icons) */}
      <nav className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm
                      opacity-0 translate-y-2 will-change-[transform,opacity]
                      animate-[fadeUpSoft_800ms_cubic-bezier(0.22,0.61,0.36,1)_1800ms_forwards]">
        <a
          href="https://snerpacoaching.is"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[#FEE715]
                     px-4 py-2 text-white/90 hover:opacity-70 transition"
        >
          Vefsíða Snerpu
        </a>
        <a
          href="https://www.instagram.com/snerpacoaching/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[#FEE715]
                     px-4 py-2 text-white/90 hover:opacity-70 transition"
        >
          Instagram Snerpu
        </a>
      </nav>
    </section>
  );
}
