import { MapPin, Bus, Clock, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const facts = [
  {
    icon: MapPin,
    title: `${site.distanceKm} km from campus`,
    body: `A short ride from ${site.campus}, in the quiet ${site.area} area.`,
  },
  {
    icon: Bus,
    title: "Shuttle included",
    body: "A daily shuttle runs to and from campus, built into your rent.",
  },
  {
    icon: Clock,
    title: "More study time",
    body: "Less time commuting means more time for lectures and rest.",
  },
  {
    icon: ShieldCheck,
    title: "Safe arrival",
    body: "Travel with other residents on a trusted, regular route.",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-paper py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="eyebrow">Location</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Close to Silverest, away from the noise
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Cerulean Commons sits {site.distanceKm} km from {site.campus}. The daily
              shuttle handles your commute both ways, so getting to a morning lecture is
              never a worry and there are no transport costs to budget for.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.title} className="rounded-3xl border border-navy/10 bg-linen p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-azure-mist text-azure">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-4xl border border-navy/10 shadow-card">
            <iframe
              title={`Map of ${site.area}`}
              src="https://www.google.com/maps?q=Silverest,+Lusaka,+Zambia&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
