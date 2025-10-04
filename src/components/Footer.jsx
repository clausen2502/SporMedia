import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Facebook, Instagram, Mail, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* hairline gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

      <div className="px-6 md:px-10 lg:px-16">
        <div className="py-10 grid gap-10 md:grid-cols-3 items-start">
          {/* brand */}
          <div className="space-y-4">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Heim">
              <img src={logo} alt="Spor Media" className="h-10" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Við hjálpum ykkur við að styrkja íþróttamerkið ykkar með faglegri samfélagsmiðla þjónustu.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-3">Gagnlegir Tenglar</p>
            <ul className="space-y-2">
              <li><HashLink smooth to="/#um-okkur" className="footer-link block">Um okkur</HashLink></li>
              <li><Link to="/verkefni" className="footer-link block">Verkefni</Link></li>
              <li><HashLink smooth to="/#hafa-samband" className="footer-link block">Hafa samband</HashLink></li>
            </ul>
          </div>

          <div className="space-y-4 md:justify-self-end">
            <p className="text-xs tracking-widest text-gray-400">Hafa Samband</p>
            <a href="mailto:hello@spormedia.is" className="inline-flex items-center gap-2 hover:text-white transition">
              <Mail size={18} aria-hidden /> spormedia@spormedia.is
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="icon-btn"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="icon-btn"><Facebook size={18} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 flex items-center justify-between text-xs text-gray-400">
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
