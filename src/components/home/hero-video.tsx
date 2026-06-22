"use client";

import { useState } from "react";

export function HeroVideo({ src }: { src: string }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
      )}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        onCanPlay={() => setVideoLoaded(true)}
      />
    </>
  );
}
