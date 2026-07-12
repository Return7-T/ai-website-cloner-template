import type { Feature } from "@/types/content";

type Props = {
  heading: string;
  subtitle: string;
  features: Feature[];
};

export function WhyChoose({ heading, subtitle, features }: Props) {
  return (
    <section className="py-16">
      <div className="ds-container">
        <h2 className="ds-h2">{heading}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-black/60">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center">
                {/* Tint monochrome PNG icons to brand blue via CSS mask */}
                <span
                  role="img"
                  aria-label={f.title}
                  className="h-14 w-14 bg-brand"
                  style={{
                    maskImage: `url(${f.icon})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${f.icon})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-black/60">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
