import Image from "next/image";
import { whyChoose, features } from "@/data/home";
import { SectionDivider } from "./product-card-grid";

export function WhyChoose() {
  return (
    <section className="py-16">
      <div className="ds-container">
        <h2 className="ds-h2">{whyChoose.heading}</h2>
        <p className="mb-2 text-center text-base text-black/60">
          {whyChoose.subtitle}
        </p>
        <SectionDivider />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
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
