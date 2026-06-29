"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Bus, BedDouble, MapPin } from "lucide-react";
import Dove from "./Dove";
import { site, waLink } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const chips = [
  { icon: BedDouble, label: `${site.spaces} spaces available` },
  { icon: Bus, label: "Daily campus shuttle" },
  { icon: ShieldCheck, label: "24/7 security" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="paver absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-azure/25 blur-3xl"
        aria-hidden
      />
      <Dove
        className="pointer-events-none absolute -bottom-10 left-[-3rem] h-72 w-72 text-white/[0.04]"
        title=""
      />

      <div className="wrap relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <motion.div {...rise(0)} className="eyebrow text-azure-soft">
            <MapPin className="h-4 w-4" />
            {site.forWho} · {site.area}
          </motion.div>

          <motion.p
            {...rise(0.05)}
            className="mt-4 font-script text-3xl text-gold sm:text-4xl"
          >
            {site.tagline}
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="mt-2 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            Safe, modern living near{" "}
            <span className="text-azure-soft">UNILUS Silverest.</span>
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Newly built, female-only rooms just {site.distanceKm} km from campus.
            Your rent covers WiFi, a daily campus shuttle, 24/7 security and backup
            power. No hidden fees, just a calm place to focus on your studies.
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-8 flex flex-wrap gap-3">
            <a href="#reserve" className="btn-gold">
              Reserve a space
            </a>
            <a
              href={waLink(
                `Hi Cerulean Commons, I'd like to book a space at your ${site.area} residence.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.36)}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {chips.map((c) => (
              <li key={c.label} className="flex items-center gap-2 text-sm text-white/85">
                <c.icon className="h-4 w-4 text-gold" />
                {c.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.2, ease: EASE },
              })}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-white/15 shadow-lift sm:aspect-[5/5]">
            <Image
              src="/images/courtyard.jpg"
              alt="The Cerulean Commons courtyard, with bright blue columns and a paved compound under a wide sky"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
          </div>

          {/* Floating fact tag */}
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-lift">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-azure text-white">
              <Bus className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold">{site.distanceKm} km</span>
              <span className="block text-xs text-slate-soft">to Silverest campus</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Reassurance strip from the brand: safe, secure, comfortable */}
      <div className="relative border-t border-white/10 bg-navy-deep/60">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
          <span>Safe</span>
          <span className="text-gold">·</span>
          <span>Secure</span>
          <span className="text-gold">·</span>
          <span>Comfortable</span>
        </div>
      </div>
    </section>
  );
}
