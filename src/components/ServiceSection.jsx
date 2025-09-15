import FeatureCard from "./FeatureCard";
import branch from "../assets/card-branch.svg";
import { Globe, Bot, Server, Lightbulb, Megaphone, Search } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard branch={branch} icon={<Globe size={28} />} title="Vefsíður">
          Greinir sér um að hanna vefsíður frá grunni, sjá um viðhald og þróun
          svo þær haldist hraðar, öruggar og notendavænar.
        </FeatureCard>

        <FeatureCard branch={branch} icon={<Bot size={35} />} title="Gervigreindarfulltrúi">
          Við gefum aðgang að gervigreindarfulltrúa sem talar við og þjónustar viðskiptavini.
        </FeatureCard>

        <FeatureCard branch={branch} icon={<Server size={35} />} title="Hýsing og þjónusta">
          Hröð hýsing og þjónusta fyrir vefsíðuna ykkar.
        </FeatureCard>

        <FeatureCard branch={branch} icon={<Lightbulb size={35} />} title="Vörumerki">
          Við hjálpum þér að skapa sterkt vörumerki með hönnun, stefnu og sjónrænum ímynd.
        </FeatureCard>

        <FeatureCard branch={branch} icon={<Megaphone size={35} />} title="Auglýsingar">
          Við búum til auglýsingar sem skila árangri – efni fyrir samfélagsmiðla og greiddar auglýsingar.
        </FeatureCard>

        <FeatureCard branch={branch} icon={<Search size={35} />} title="Leitarvélabestun (SEO)">
          Við bætum sýnileika ykkar á netinu með faglegri leitarvélabestun.
        </FeatureCard>
      </div>
    </section>
  );
}
