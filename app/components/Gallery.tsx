import Image from "next/image";
import Reveal from "./Reveal";

const shots = [
  {
    src: "/images/courtyard.jpg",
    caption: "Secure, spacious paved courtyard",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: "/images/kitchen.jpg", caption: "Modern shared kitchen", span: "" },
  { src: "/images/compound.jpg", caption: "Gated, electric-fenced perimeter", span: "" },
  { src: "/images/exterior.jpg", caption: "Newly built blocks", span: "sm:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-navy-deep py-20 text-white sm:py-28">
      <div className="wrap">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow text-azure-soft">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Take a look around
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Real photos of the residence, freshly finished and ready for the new term.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid auto-rows-[200px] gap-4 sm:grid-cols-3 lg:auto-rows-[230px]">
            {shots.map((s) => (
              <figure
                key={s.src}
                className={`group relative overflow-hidden rounded-3xl ${s.span}`}
              >
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/0 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
