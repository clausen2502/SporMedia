import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HafaSambandSection() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: if filled, bail (bot)
    if (new FormData(form).get("company")) return;

    setPending(true);
    setStatus({ ok: null, msg: "" });

    try {
      const res = await fetch("https://formspree.io/f/xeorpjwr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        form.reset();
        setStatus({ ok: true, msg: "Takk fyrir fyrirspurnina! Við höfum samband eins fljótt og hægt er." });
      } else {
        // Formspree sends JSON with errors
        const data = await res.json().catch(() => null);
        const msg =
          data?.errors?.map((e) => e.message).join(", ") ||
          "Villa kom upp. Reyndu aftur.";
        setStatus({ ok: false, msg });
      }
    } catch {
      setStatus({ ok: false, msg: "Nettenging brást. Reyndu aftur." });
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="hafa-samband" className="py-8">
      <div className="mx-auto w-full max-w-4xl px-6">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xeorpjwr"
          method="POST"
          className="rounded-3xl border border-[#FEE715]/60 bg-[#101820] p-8 sm:p-12 shadow-xl"
        >
          <h2 className="text-white text-3xl sm:text-4xl font-semibold text-center">
            Byrjum samtalið!
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 text-center">
            Endilega sendu okkur fyrirspurn og við könnum valmöguleikana
          </p>

          {/* Inline status */}
          {status.msg && (
            <div
              role="status"
              className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                status.ok
                  ? "bg-emerald-600/20 text-emerald-200 border border-emerald-500/40"
                  : "bg-red-600/20 text-red-200 border border-red-500/40"
              }`}
            >
              {status.msg}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="sr-only">Nafn</label>
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
              <label htmlFor="email" className="sr-only">Netfang</label>
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
            <label htmlFor="message" className="sr-only">Skilaboð</label>
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

          {/* Optional metadata */}
          <input type="hidden" name="_subject" value="Ný fyrirspurn af spormedia.is" />
          <input type="hidden" name="_page" value={typeof window !== "undefined" ? window.location.href : "unknown"} />

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
