"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  count: number;
  renderItem: (index: number, duplicate: boolean) => ReactNode;
  speed?: number;
  suspended?: boolean;
};

export default function MovingRail({ label, count, renderItem, speed = 24, suspended = false }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const focusRef = useRef(false);
  const resumeAtRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let position = track.scrollLeft;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(track);
    function animate(time: number) {
      const delta = lastTime ? Math.min(time - lastTime, 50) : 0;
      lastTime = time;
      if (track && visible && !document.hidden && !paused && !suspended && !reducedMotion.matches && !hoverRef.current && !focusRef.current && time > resumeAtRef.current) {
        const loopWidth = track.scrollWidth / 2;
        if (Math.abs(track.scrollLeft - position) > 2) position = track.scrollLeft;
        position += speed * delta / 1000;
        if (position >= loopWidth) position -= loopWidth;
        track.scrollLeft = position;
      } else if (track) {
        position = track.scrollLeft;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [paused, speed, suspended]);

  function move(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    resumeAtRef.current = performance.now() + 6000;
    const loopWidth = track.scrollWidth / 2;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && direction < 0 && track.scrollLeft < 1) track.scrollLeft = loopWidth;
    const card = track.querySelector<HTMLElement>("[data-rail-item]");
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 24), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <div data-motion-paused={paused || suspended ? "true" : undefined}>
      <div
        ref={trackRef}
        role="region"
        aria-label={`${label} carousel`}
        tabIndex={0}
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; }}
        onFocusCapture={() => { focusRef.current = true; }}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) focusRef.current = false; }}
        onPointerDown={() => { resumeAtRef.current = performance.now() + 6000; }}
        onWheel={() => { resumeAtRef.current = performance.now() + 6000; }}
        onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}
        className="moving-rail flex overflow-x-auto overscroll-x-contain py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[false, true].map((duplicate) => (
          <div key={String(duplicate)} aria-hidden={duplicate || undefined} className={`rail-group flex shrink-0 gap-6 pr-6 ${duplicate ? "rail-duplicate" : ""}`}>
            {Array.from({ length: count }, (_, index) => <div data-rail-item key={index} className="w-[min(82vw,340px)] sm:w-[360px] shrink-0">{renderItem(index, duplicate)}</div>)}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-ink/55">Swipe to explore <span aria-hidden="true">↔</span> <span className="hidden sm:inline">· Hover to pause</span></p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} aria-label={`${paused ? "Resume" : "Pause"} ${label.toLowerCase()} scrolling`} className="rounded-full border border-ink/15 px-4 h-11 text-xs font-medium text-ink transition-colors hover:bg-canvas">{paused ? "Play motion" : "Pause motion"}</button>
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label.toLowerCase()}`} className="h-11 w-11 rounded-full border border-ink/15 text-ink transition-colors hover:bg-canvas">←</button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${label.toLowerCase()}`} className="h-11 w-11 rounded-full bg-ink text-white transition-colors hover:bg-ink-soft">→</button>
        </div>
      </div>
    </div>
  );
}
