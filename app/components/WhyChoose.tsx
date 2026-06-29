import { Check, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const reasons = [
  "Modern and newly built",
  "Safe, secure and peaceful",
  "All-inclusive rent, no hidden fees",
  "Focus on your studies, we handle the rest",
];

export default function WhyChoose() {
  return (
    <section className="bg-paper pb-4 sm:pb-8">
      <div className="wrap">
        <Reveal>
          <div className="grid gap-8 rounded-4xl bg-gradient-to-br from-navy to-navy-deep p-8 text-white shadow-lift sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow text-azure-soft">Why Cerulean Commons</span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Built for students, run with care
              </h2>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-azure text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-white/85">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special offer card */}
            <div className="rounded-3xl border border-gold/40 bg-white/[0.06] p-7 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Limited offer
              </span>
              <p className="mt-4 font-script text-3xl text-gold">Move in and save</p>
              <p className="mt-1 font-display text-5xl font-extrabold text-white">K250 off</p>
              <p className="mt-2 text-white/80">your first month&apos;s rent</p>
              <p className="mt-4 text-sm text-white/60">
                For the first 10 students to book. Only {site.spaces} spaces available.
              </p>
              <a href="#reserve" className="btn-gold mt-6 w-full">
                Claim the offer
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
