import { hero } from "@/data/home";
import { cn } from "@/lib/utils";
import { HeroVideo } from "./hero-video";

export function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[460px] w-full overflow-hidden md:h-[800px]">
      <HeroVideo src={hero.video} />
      <div className="absolute inset-0 bg-black/25" />
      <div className="ds-container-wide relative flex h-full flex-col justify-end pb-16 md:pb-24">
        <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white drop-shadow-md md:text-[40px] md:leading-[1.2]">
          {hero.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>
        <div className="mt-6 flex flex-wrap gap-4">
          {hero.buttons.map((b) => (
            <a
              key={b.text}
              href={b.href}
              className={cn(
                "rounded-[3px] px-6 py-3 text-lg font-normal text-offwhite transition-opacity hover:opacity-90 md:px-8 md:py-3.5 md:text-[26px]",
                b.color === "red"
                  ? "bg-[color:var(--hero-cta)]"
                  : "bg-secondary/90"
              )}
            >
              {b.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
