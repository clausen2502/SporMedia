import { ArrowRight } from "lucide-react";
import SpotlightCard from "../reactBits/spotlight.jsx";
import { useState } from "react";

export default function ContactCTA() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      setPending(true);
      // TODO: wire backend route:
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      await new Promise(r => setTimeout(r, 700)); // demo delay
      setSent(true);
      e.currentTarget.reset();
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="hafa-samband" className="relative sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.20)"
          className="custom-spotlight-card relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#525252] backdrop-blur-md"
        >
          <div className="relative z-10 px-6 sm:px-12 sm:py-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Byrjum samtalið!
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70">
              Endilega sentu okkur fyrirspurn og við könnum valmöguleikanna
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 mx-auto w-full max-w-2xl text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-white/70 mb-1">
                    Nafn
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder=""
                    className="w-full rounded-xl bg-white/5 text-white placeholder-white/40
                               border border-white/10 px-4 py-3 outline-none
                               focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-white/70 mb-1">
                    Netfang
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder=""
                    className="w-full rounded-xl bg-white/5 text-white placeholder-white/40
                               border border-white/10 px-4 py-3 outline-none
                               focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-xs text-white/70 mb-1">
                  Skilaboð
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Segðu okkur aðeins frá því hvað þú ert að hugsa um..."
                  className="w-full rounded-xl bg-white/5 text-white placeholder-white/40
                             border border-white/10 px-4 py-3 outline-none
                             focus:border-white/20 focus:ring-2 focus:ring-white/10"
                />
              </div>

              {/* Honeypot */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium
                             bg-white text-black shadow-lg transition
                             hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
                >
                  {pending ? "Senda..." : "Senda fyrirspurn"}
                  <ArrowRight size={18} />
                </button>
              </div>

              {sent && (
                <p className="mt-4 text-center text-sm text-emerald-300/90">
                  Takk! Við svörum eins fljótt og auðið er.
                </p>
              )}
            </form>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
