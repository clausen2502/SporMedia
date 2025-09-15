import forrest1 from "../assets/forrest3.jpg";

export default function Hero() {
  return (
    <header
      id="heim"
      className="relative h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${forrest1})` }}
    >
      <div className="relative flex flex-col items-center text-center pt-32">
        <p className="dark_brown font-semibold text-6xl">Sterkar rætur skipta máli.</p>
        <p className="dark_brown text-2xl mt-6 mb-8 max-w-3xl">
          Við greinum fyrirtækið ykkar og hjálpum ykkur að stíga mikilvæg skref í markaðsheiminn.
        </p>
        <a href="#hafa-samband" className="brown-btn">Byrjaðu með okkur</a>
      </div>
    </header>
  );
}
