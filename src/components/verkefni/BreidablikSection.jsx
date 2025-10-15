import CircularGallery from "../../reactBits/photoscroll.jsx";

export default function BreidablikSection() {
  const items = [
    { image: "/media/breidablik/next-match1.jpeg", text: "" },
    { image: "/media/breidablik/kick-off1.jpeg", text: "" },
    { image: "/media/breidablik/half-time1.jpeg", text: "" },
    { image: "/media/breidablik/full-time1.jpeg", text: "" },
    { image: "/media/breidablik/byrjunarlid1.jpeg", text: "" },
    { image: "/media/breidablik/evroputreyja-2025.jpeg", text: "" },
    { image: "/media/breidablik/isl-meistarar-kvk.jpeg", text: "" },
    { image: "/media/breidablik/leikdagur1.jpeg", text: "" },
    { image: "/media/breidablik/selfie.jpeg", text: "" },
    { image: "/media/breidablik/leikur-hafinn1.jpeg", text: "" },
    { image: "/media/breidablik/ljosid.jpeg", text: "" },
    { image: "/media/breidablik/conference1.jpeg", text: "" },
    { image: "/media/breidablik/league.jpeg", text: "" },
    { image: "/media/breidablik/naesti-leikur1.jpeg", text: "" },
    { image: "/media/breidablik/leik-lokid.jpeg", text: "" },
  ];

  return (
    <section id="breidablik" className="relative">
      <div className=" text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracaking-wide text-white
                       opacity-0 translate-y-3 will-change-[transform,opacity]
                       animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_1500ms_forwards]">
          BREIÐABLIK
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto
                      opacity-0 translate-y-3 will-change-[transform,opacity]
                      animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_1600ms_forwards]">
          Myndir úr samstarfi okkar við Breiðablik
        </p>
      </div>

      <div className="flex justify-center
                      opacity-0 scale-[.985] will-change-[transform,opacity]
                      animate-[fadeInScale_1200ms_cubic-bezier(0.22,0.61,0.36,1)_1500ms_forwards]">
        <div className="relative w-full h-[68vh] max-h-[820px]">
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.08}
            scrollEase={0.02}
          />
        </div>
      </div>

      {/* Partner links */}
      <nav className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm
                      opacity-0 translate-y-2 will-change-[transform,opacity]
                      animate-[fadeUpSoft_800ms_cubic-bezier(0.22,0.61,0.36,1)_1800ms_forwards]">
        <a
          href="https://breidablik.is"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[#FEE715]
                     px-4 py-2 text-white/85 hover:opacity-60 transition"
        >
          Vefsíða Breiðabliks
        </a>
        <a
          href="https://instagram.com/breidablikfc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[#FEE715]
                     px-4 py-2 text-white/85  hover:opacity-60 transition"
        >
          Instagram Breiðabliks
        </a>
      </nav>
    </section>
  );
}
