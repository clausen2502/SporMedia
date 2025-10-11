// src/components/ContactMini.jsx
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactMini() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      setPending(true);
      // TODO: connect to your backend:
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      await new Promise((r) => setTimeout(r, 600)); // demo delay
      e.currentTarget.reset();
      alert("Takk! Við svörum fljótt.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="hafa-samband" className="py-8">
      {/* wider container */}
      <div className="mx-auto w-full max-w-4xl px-6">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#FEE715]/60 bg-[#101820] p-8 sm:p-12 shadow-xl"
        >
          {/* centered header */}
          <h2 className="text-white text-3xl sm:text-4xl font-semibold text-center">
            Byrjum samtalið!
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 text-center">
          Endilega sentu okkur fyrirspurn og við könnum valmöguleikanna
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs text-white/70 mb-1">
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Nafn"
                className="w-full rounded-xl bg-white/5 text-white placeholder-white/40
                           border border-white/10 px-4 py-3 outline-none
                           focus:border-[#FEE715] focus:ring-2 focus:ring-[#FEE715]/50
                           focus-visible:outline-[#FEE715] focus-visible:outline-offset-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-white/70 mb-1">
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Netfang"
                className="w-full rounded-xl bg-white/5 text-white placeholder-white/40
                           border border-white/10 px-4 py-3 outline-none
                           focus:border-[#FEE715] focus:ring-2 focus:ring-[#FEE715]/50
                           focus-visible:outline-[#FEE715] focus-visible:outline-offset-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-xs text-white/70 mb-1">
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Segðu okkur frá verkefninu…"
              className="w-full rounded-xl bg-white/5 text-white placeholder-white/40
                         border border-white/10 px-4 py-3 outline-none
                         focus:border-[#FEE715] focus:ring-2 focus:ring-[#FEE715]/50
                         focus-visible:outline-[#FEE715] focus-visible:outline-offset-2"
            />
          </div>

          {/* Honeypot (spam trap) */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium
                         border border-[#FEE715] text-[#101820] bg-[#FEE715]
                         hover:bg-[#FEE715]/90 active:bg-[#FEE715]/80
                         disabled:opacity-60 focus-visible:outline-offset-2
                         focus-visible:outline-[#FEE715] cursor-pointer"
            >
              {pending ? "Senda…" : "Senda"}
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
