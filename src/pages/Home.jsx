import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Intro from "../components/Intro";
import ServicesSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import fadedForrest from "../assets/faded-forrest.png";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        className="relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${fadedForrest})` }}
      >
        <div className="bg-white/40">
          <Intro />
          <main className="flex flex-col items-center justify-center py-5">
            <SectionHeading>OKKAR ÞJÓNUSTA</SectionHeading>
            <ServicesSection />
            <div id="um-okkur" className="pt-20 -mt-20" />
            <AboutSection />
          </main>
          <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] w-screen border-t-2 border-[var(--color--brown)]" />
        </div>
      </section>
      <div id="hafa-samband" className="pt-20 -mt-20" />
    </>
  );
}
