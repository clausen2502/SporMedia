// src/components/ElectricLinesBox.jsx
import { useEffect, useRef } from "react";

export default function ElectricLinesBox({
  color = "#00C7D9", lineCount = 12, speed = 130,
  thickness = 2, glow = 22, opacity = 0.9, className = "",
  children,
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const root = rootRef.current;
    const c = canvasRef.current;
    const ctx = c.getContext("2d", { alpha: true });
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    let w = 0, h = 0;
    const lines = Array.from({ length: lineCount }).map((_, i) => ({
      phase: Math.random() * Math.PI * 2,
      amp: 14 + Math.random() * 24,
      freq: 0.0025 + Math.random() * 0.002,
      yBase: 0.18 + (0.64 * i) / (lineCount - 1),
      widthScale: 0.7 + Math.random() * 0.6,
      jitter: Math.random() * 1000,
    }));

    const resize = () => {
      const r = root.getBoundingClientRect();
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      c.width = Math.ceil(w * dpr); c.height = Math.ceil(h * dpr);
      c.style.width = w + "px"; c.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const ro = new ResizeObserver(resize); ro.observe(root); resize();

    ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.shadowColor = color;

    const draw = (t) => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.10)"; ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = color; ctx.shadowBlur = glow;

      for (let i = 0; i < lines.length; i++) {
        const L = lines[i];
        const xOffset = ((t * speed) / 1000 + i * 120) % (w + 200) - 100;
        const steps = Math.max(24, Math.floor((w / 40) * L.widthScale));
        ctx.beginPath();
        for (let s = 0; s <= steps; s++) {
          const x = (s / steps) * w;
          const yC = L.yBase * h;
          const y = yC
            + Math.sin((x + xOffset) * L.freq + L.phase) * L.amp
            + Math.sin((x + xOffset + L.jitter) * (L.freq * 2.1)) * (L.amp * 0.35);
          s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.globalAlpha = opacity * (0.7 + (i / lines.length) * 0.6);
        ctx.lineWidth = thickness * (1 + (i / lines.length) * 0.8);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, [color, lineCount, speed, thickness, glow, opacity]);

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />
      {children}
    </div>
  );
}
