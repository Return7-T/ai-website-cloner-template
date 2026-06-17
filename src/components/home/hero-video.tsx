"use client";

import { useEffect, useState } from "react";

export function HeroVideo({ src }: { src: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-black" />;
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden
    />
  );
}
