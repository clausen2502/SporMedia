import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import forrest1 from "./assets/forrest3.jpg";
import fadedForrest from "./assets/faded-forrest.png";
import branch from "./assets/branch.svg";
import ServicesSection from "./ServiceSection";
import Footer from "./Footer";
import "./App.css";
import AboutSection from "./AboutSection";
7
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-18 px-10 flex items-center justify-between transition-colors duration-300 ${
          scrolled
            ? "bg-[var(--color--cream)] shadow-md"
            : "bg-transparent"
        }`}
      >
        <img src={logo} alt="Spor Logo" className="h-30" />
        <div className="flex items-center gap-20">
          <a href="#heim" className="nav-link">Heim</a>
          <button className="nav-link">Um Okkur</button>
          <button type="button" className="nav-link">Hafa Samband</button>
        </div>
      </nav>

      {/* HERO */}
      <header
        id="heim"
        className="relative h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${forrest1})` }}>
        <div className="relative flex flex-col items-center text-center pt-32">
          <p className="dark_brown font-semibold text-6xl">
            Sterkar rætur skipta máli.
          </p>
          <p className="dark_brown text-2xl mt-6 mb-8 max-w-3xl">
            Við greinum fyrirtækið ykkar og hjálpum ykkur að stíga mikilvæg skref
            í markaðsheiminn.
          </p>
          <button className="brown-btn">Byrjaðu með okkur</button>
        </div>
      </header>

      <section
        className="relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${fadedForrest})` }}>
        <div className="bg-white/40">
          {/* MAIN CONTENT */}
          <main className="flex flex-col items-center justify-center py-5 border-t-4">
            <div className="flex items-center justify-center gap-6">
            <img src={branch} alt="Left Branch" className="absolute left-0" />
            <h2 className="dark_brown text-6xl font-bold text-brown-700 text-center flex-grow">
              HVAÐ GERUM VIÐ?
            </h2>
            <img src={branch} alt="Right Branch" className="absolute right-0 scale-x-[-1]" />
            </div>
            <p className = "text-2xl text-center mb-12 max-w-3xl mt-10">
              SporMedia býður upp á samþættar lausnir fyrir fyrirtæki sem vilja styrkja ímynd sína og ná betri árangri í stafrænum heimi.
            </p>
            <p className="text-2xl text-center mb-12 max-w-3xl">
              Við hjálpum fyrirtækjum að verða sýnilegri, traustari og aðgengilegri með vönduðum veflausnum, skýru vörumerki, markvissum auglýsingum og snjöllum gervigreindarfulltrúa.
            </p>
            <p className="text-2xl text-center mb-12 max-w-3xl">
              Markmiðið okkar er að gera góða þjónustu sýnilega - svo viðskiptavinir finni hana, treysti henni og velji hana aftur og aftur.
            </p>
          </main>

          <main className="flex flex-col items-center justify-center py-5">
            <div className="flex items-center justify-center gap-6">
              <h2 className="dark_brown text-6xl font-bold text-brown-700 text-center">
                OKKAR ÞJÓNUSTA
              </h2>
            </div>
            <ServicesSection />
            <AboutSection />
          </main>
        <div className="mt-12 relative left-1/2 right-1/2 -ml-[50vw] w-screen border-t-2 border-[var(--color--brown)]" />
        </div>
      </section>
      <Footer />
    </>
  );
}
