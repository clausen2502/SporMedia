import oskar from "../assets/oskar.svg";
import mirza from "../assets/mirza.svg";
import isak from "../assets/isak.svg";

const brown = "text-[var(--color--dark_brown)]";
const brownBorder = "border-[var(--color--dark_brown)]";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className={`text-4xl md:text-5xl font-extrabold text-center ${brown} tracking-wide`}>
        HVERJIR ERUM VIÐ?
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <Person img={oskar} name="Óskar Hákonarsson" title="Framkvæmdastjóri" sub="IT (CTO)" />
        <Person img={mirza} name="Mirza Hasecic" title="Framkvæmdastjóri" sub="(CEO)" />
        <Person img={isak} name="Isak Clausen" title="Framkvæmdastjóri" sub="(Web development)" />
      </div>

      <h3 className={`mt-12 text-3xl md:text-4xl font-extrabold text-center ${brown}`}>
        TIL HVERS ER ÞETTA?
      </h3>

      <div className="mt-8 mx-auto max-w-2xl space-y-6">
        <Benefit heading="Aukinn sýnileiki" text="Nútímaleg vefsíðuhönnun og markvissar auglýsingar auka sýnileika fyrirtækisins á netinu. Þetta hjálpar fyrirtækjum að ná til stærri markhóps og skapa traust hjá nýjum viðskiptavinum." />
        <Benefit heading="Betri þjónusta" text="Gervigreindarfulltrúar veita hraða og áreiðanlega þjónustu allan sólarhringinn, svara algengum fyrirspurnum og létta álagi af starfsmönnum. Þetta eykur ánægju viðskiptavina og tryggir hraðari úrlausn." />
        <Benefit heading="Sterkt vörumerki" text="Samræmd hönnun og fagleg framsetning á netinu skilar sterku og traustu vörumerki sem eykur trúverðugleika og dregur að sér fleiri viðskiptavini." />
      </div>
    </section>
  );
}

function Person({ img, name, title, sub }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`md:h-30 md:w-32 rounded-full overflow-hidden border-2 ${brownBorder} shadow-sm`}>
        <img src={img} alt={name}/>
      </div>

      <div className="mt-3">
        <p className={`font-semibold ${brown}`}>{name}</p>
        <p className="text-sm opacity-90">{title}</p>
        <p className="text-xs opacity-70">{sub}</p>
      </div>
    </div>
  );
}

function Benefit({ heading, text }) {
  return (
    <div>
      <h4 className={`text-xl font-semibold ${brown} tracking-wide`}>{heading}</h4>
      <p className="mt-1 leading-relaxed text-black/80">{text}</p>
    </div>
  );
}
