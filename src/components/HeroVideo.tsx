"use client";

import { useEffect, useRef, useState } from "react";

// Waving Blue Particles by crazy motions, Pexels video 12920671.
const VIDEO_SRC = "https://videos.pexels.com/video-files/12920671/12920671-hd_1920_1080_30fps.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => {});
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.svg"
        aria-hidden="true"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-5 sm:right-8 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-ink/25 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-ink/50"
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        {isPlaying ? "Pause motion" : "Play motion"}
      </button>
    </>
  );
}
