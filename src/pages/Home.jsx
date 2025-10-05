import Intro from "../components/Intro";
import ViðskiptavinirSection from "../components/VidskiptavinirSection.jsx";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThjonustaSection from "../components/ThjonustaSection.jsx";
import Verkefni from "../components/VerkefniSection.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <ThjonustaSection />
      <Verkefni />
      <Footer />
    </>
  );
}
