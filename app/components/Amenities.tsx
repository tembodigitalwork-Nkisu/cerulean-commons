import {
  Wifi,
  Bus,
  ShieldCheck,
  Zap,
  Fence,
  Droplets,
  CookingPot,
  Sparkles,
  Lock,
} from "lucide-react";
import Reveal from "./Reveal";

const amenities = [
  { icon: Wifi, title: "Free WiFi", body: "Reliable internet for lectures and assignments." },
  { icon: Bus, title: "Daily campus shuttle", body: "To and from UNILUS Silverest, included in rent." },
  { icon: ShieldCheck, title: "24/7 security", body: "On-site security around the clock." },
  { icon: Fence, title: "Electric fence", body: "A fully gated, secured perimeter." },
  { icon: Zap, title: "Backup power", body: "The lights and WiFi stay on during cuts." },
  { icon: Droplets, title: "Solar hybrid geysers", body: "Warm water without the power worry." },
  { icon: CookingPot, title: "Modern shared kitchen", body: "A clean, well-finished space to cook." },
  { icon: Sparkles, title: "Clean living spaces", body: "Tidy rooms and a paved courtyard." },
  { icon: Lock, title: "Women-only residence", body: "A calm, private community of students." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-paper py-20 sm:py-28">
      <div className="wrap">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">What&apos;s Included</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              One rent, everything taken care of
            </h2>
            <p className="mt-4 text-lg text-slate">
              These come with every room, at no extra cost. You move in, we handle the rest.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.06}>
              <div className="group flex h-full items-start gap-4 rounded-3xl border border-navy/10 bg-linen p-6 shadow-ring transition-colors hover:border-azure/40">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-azure-mist text-azure transition-colors group-hover:bg-azure group-hover:text-white">
                  <a.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
