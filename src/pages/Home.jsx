import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThjonustaSection from "../components/ThjonustaSection.jsx";
import Verkefni from "../components/VerkefniSection.jsx";
import UmOkkur from "../components/UmOkkurSection.jsx";
import Threads from "../reactBits/thread.jsx";
import HafaSamband  from "../components/HafaSambandSection.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Threads
          amplitude={3.4}
          distance={0.2}
          enableMouseInteraction={true}
        />
      </div>
      <Intro />
      <ThjonustaSection />
      <Verkefni />
      <UmOkkur />
      <HafaSamband />
      <Footer />
    </>
  );
}
