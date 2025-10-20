import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { ArrowUp } from "lucide-react";
import logo_spin from "../assets/logo-spin.mp4"
import { useRef, useEffect } from "react";

export default function Footer() {
  const vidRef = useRef(null);

  useEffect(() => {
      vidRef.current?.play().catch(() => {});
    }, []);
  return (
    <footer className=" text-gray-300">
      {/* divider */}
      <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="px-6 md:px-10 lg:px-16">
        <div className="py-10 grid gap-10 md:grid-cols-3 items-start">
          <div className="space-y-4">
            <div className="w-[150px] h-[45px] -ml-7">
              <Link to="/" className="block w-full h-full relative" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <video
                  ref={vidRef}
                  src={logo_spin}
                  className="w-full h-full object-contain"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
              </Link>
            </div>  
            <p className="text-sm text-fuchsia-50 leading-relaxed">
              Við hjálpum ykkur við að styrkja ímynd íþróttafélaga með faglegri samfélagsmiðla þjónustu.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest text-fuchsia-50 mb-3">Gagnlegir Tenglar</p>
            <ul className="space-y-2">
              <li><HashLink smooth to="/#um-okkur" className="footer-link block">Um okkur</HashLink></li>
              <li><Link to="/verkefni" className="footer-link block">Verkefni</Link></li>
              <li><HashLink smooth to="/#hafa-samband" className="footer-link block">Hafa samband</HashLink></li>
            </ul>
          </div>

          <div className="space-y-4 md:justify-self-end">
            <p className="text-xs tracking-widest text-fuchsia-50">Hafa Samband</p>
            <a href="mailto:info@spormedia.is" className="inline-flex items-center gap-2 hover:text-white transition">
              <CiMail size={18} aria-hidden /> info@spormedia.is
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/spormedia.is/" aria-label="Instagram" className="icon-btn"><SiInstagram size={18} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/spormedia//" aria-label="LinkedIn" className="icon-btn"><SiLinkedin size={18} /></a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 flex items-center justify-between text-xs text-fuchsia-50">
          <p>© {new Date().getFullYear()} Spor Media — Öll réttindi áskilin.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-white transition"
            aria-label="Efst á síðu"
          >
            <ArrowUp size={16} /> Efst
          </button>
        </div>
      </div>
    </footer>
  );
}
