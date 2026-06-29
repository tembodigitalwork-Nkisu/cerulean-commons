import Image from "next/image";
import { Sparkles, Heart, Lock } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const points = [
  {
    icon: Sparkles,
    title: "Newly built",
    body: "Modern rooms, a shared kitchen and clean paved courtyards, finished and ready to move into.",
  },
  {
    icon: Lock,
    title: "Female-only and gated",
    body: "A women-only residence behind an electric fence with security on site, day and night.",
  },
  {
    icon: Heart,
    title: "Everything included",
    body: "One all-inclusive rent covers your shuttle, WiFi, power and water. No surprise bills.",
  },
];

export default function Residence() {
  return (
    <section id="residence" className="bg-paper py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/exterior.jpg"
                alt="Newly built Cerulean Commons block with bright blue trim, behind a secure gate and electric fence"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-gold px-5 py-4 text-navy-deep shadow-card sm:block">
              <span className="block font-display text-2xl font-extrabold leading-none">
                {site.spaces}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide">
                spaces available
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="eyebrow">The Residence</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A peaceful place to live while you study
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Cerulean Commons is a women-only student residence in {site.area}, a short
              shuttle ride from {site.campus}. We took care of the things that get in
              the way of studying, from power cuts to the daily commute, so you can
              settle in and focus.
            </p>

            <div className="mt-8 space-y-5">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-azure-mist text-azure">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-slate">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
