// src/pages/Verkefni.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CircularGallery from "../reactBits/photoscroll.jsx";
import TextType from "../reactBits/typing.jsx";

export default function Verkefni() {
  const items = [
    { image: "/media/breidablik/byrjunarlid1.jpeg", text: "" },
    { image: "/media/breidablik/evroputreyja-2025.jpeg", text: "" },
    { image: "/media/breidablik/halfleikur1.jpeg", text: "" },
    { image: "/media/breidablik/isl-meistarar-kvk.jpeg", text: "" },
    { image: "/media/breidablik/leikdagur1.jpeg", text: "" },
    { image: "/media/breidablik/leikur-hafinn1.jpeg", text: "" },
    { image: "/media/breidablik/ljosid.jpeg", text: "" },
    { image: "/media/breidablik/naesti-leikur1.jpeg", text: "" },
    { image: "/media/breidablik/next-match1.jpeg", text: "" },
    { image: "/media/breidablik/leik-lokid.jpeg", text: "" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#101820] text-white py-20">
        <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-8">
          {/* Eyebrow + main page heading */}
          <header className="text-center">
            {/* main title (typed) */}
            <h1 className="text-4xl sm:text-6xl font-bold">
              <TextType text="Verkefnin Okkar" speed={70} showCursor={false} />
            </h1>

            {/* lead — slower, soft */}
            <p className="mt-3 text-white/70 max-w-2xl mx-auto
                          opacity-0 translate-y-3 will-change-[transform,opacity]
                          animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_400ms_forwards]">
              Efni sem við bjuggum til fyrir viðskiptavini
            </p>

            {/* subtle divider — lingers a bit */}
            <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-[#FEE715]/60 to-transparent
                            opacity-0 will-change-[opacity]
                            animate-[fadeIn_1000ms_ease-out_700ms_forwards]" />
          </header>

          {/* project block title */}
          <div className="mt-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide text-white
                           opacity-0 translate-y-3 will-change-[transform,opacity]
                           animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_1000ms_forwards]">
              BREIÐABLIK
            </h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto
                          opacity-0 translate-y-3 will-change-[transform,opacity]
                          animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_1200ms_forwards]">
              Myndir úr samstarfi okkar við Breiðablik
            </p>
          </div>

          {/* gallery — fades & settles after headings */}
          <div className="mt-8 flex justify-center
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
        </section>
        <Footer />
      </main>
    </>
  );
}
