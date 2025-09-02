// Footer.jsx
import logo from "./assets/logo2.svg";

export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        
        {/* Logo & tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="SporMedia Logo" className="h-30" />
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg text-[var(--color--dark_brown)] mb-3">
            Flýtileiðir
          </h4>
          <ul className="space-y-2 text-[var(--color--dark_brown)]">
            <li><a href="#heim" className="hover:underline">Heim</a></li>
            <li><a href="#umokkur" className="hover:underline">Um Okkur</a></li>
            <li><a href="#thjonusta" className="hover:underline">Þjónusta</a></li>
            <li><a href="#hafasamband" className="hover:underline">Hafa Samband</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg text-[var(--color--dark_brown)] mb-3">
            Hafðu samband
          </h4>
          <p className="text-[var(--color--dark_brown)] opacity-90 text-sm">
            oskar@spormedia.is <br />
            +354 780 7733 <br />
            Reykjavík, Ísland
          </p>
        </div>
    </footer> 
  );
}
