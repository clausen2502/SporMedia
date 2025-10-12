import TextType from "../../reactBits/typing.jsx";

export default function VerkefniIntro() {
  return (
    <section id="verkefni-intro" className="relative mx-auto max-w-6xl px-6 pt-20 pb-8">
      <header className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          <TextType text="Verkefnin Okkar" speed={70} showCursor={false} />
        </h1>

        <p className="mt-3 text-white/70 max-w-2xl mx-auto
                      opacity-0 translate-y-3 will-change-[transform,opacity]
                      animate-[fadeUpSoft_900ms_cubic-bezier(0.22,0.61,0.36,1)_400ms_forwards]">
          Efni sem við bjuggum til fyrir viðskiptavini
        </p>

        <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-[#FEE715]/60 to-transparent
                        opacity-0 will-change-[opacity]
                        animate-[fadeIn_1000ms_ease-out_700ms_forwards]" />
      </header>
    </section>
  );
}
