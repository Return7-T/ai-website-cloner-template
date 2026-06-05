import Link from "next/link";
import { hero } from "@/data/home";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[460px] w-full overflow-hidden md:h-[800px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={hero.video}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="ds-container-wide relative flex h-full flex-col justify-end pb-16 md:pb-24">
        <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white drop-shadow-md md:text-[40px] md:leading-[1.2]">
          {hero.heading}
        </h1>
        <div className="mt-6 flex flex-wrap gap-4">
          {hero.buttons.map((b) => (
            <Link
              key={b.text}
              href={b.href}
              className={cn(
                "rounded-[3px] px-6 py-3 text-lg font-normal text-offwhite transition-opacity hover:opacity-90 md:px-8 md:py-3.5 md:text-[26px]",
                b.color === "red"
                  ? "bg-[rgba(196,0,0,0.7)]"
                  : "bg-[rgba(0,65,213,0.7)]"
              )}
            >
              {b.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
