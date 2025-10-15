import { useEffect, useState } from "react";

export default function SidebarProjects({
  items = [],
  offset = 96,
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: null, rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.1 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items, offset]);

  // Smooth scroll with navbar offset
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      className="
        rounded-2xl border border-white/10 bg-[#0f1720]/80 backdrop-blur
        shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
      "
    >
      <div className="px-4 pt-4 pb-3 border-b border-white/10">
        <h3 className="text-sm font-semibold tracking-wide text-white/80">
          Verkefni
        </h3>
      </div>

      <ul className="p-2">
        {items.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={scrollTo(id)}
                className={`group flex items-center justify-between rounded-xl px-3 py-2.5 my-1 transition
                  ${isActive ? "bg-[#FEE715]/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"}`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full transition
                      ${isActive ? "bg-[#FEE715]" : "bg-white/25 group-hover:bg-white/40"}`}
                  />
                  <span className="text-sm">{label}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
