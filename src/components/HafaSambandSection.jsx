import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section id="cta" className="relative sm:py-20">
      {/* subtle background grid + spotlight */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="relative px-6 sm:px-12 sm:py-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Gerum drauminn þinn að veruleika
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              Breyttu hvernig þú lítur út á við, hafðu samband og könnum valmöguleikanna!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium
                           bg-white text-black shadow-lg hover:scale-[1.02] transition">
                Hafðu samband <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
