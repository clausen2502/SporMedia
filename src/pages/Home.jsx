import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThjonustaSection from "../components/ThjonustaSection.jsx";
import Verkefni from "../components/VerkefniSection.jsx";
import UmOkkur from "../components/UmOkkurSection.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <ThjonustaSection />
      <Verkefni />
      <UmOkkur />
      <Footer />
    </>
  );
}
