"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { site, kwacha, rooms } from "@/lib/site";

const faqs = [
  {
    q: "Who can stay at Cerulean Commons?",
    a: `Cerulean Commons is a ${site.forWho.toLowerCase()} residence for students at ${site.campus} and nearby colleges.`,
  },
  {
    q: "Are the rooms self contained?",
    a: "No. Rooms are not self contained, so bathrooms and the kitchen are shared. Everything is modern, clean and well kept.",
  },
  {
    q: "What does the rent include?",
    a: "WiFi, a daily campus shuttle, 24/7 security, an electric fence, backup power and solar hybrid geysers. There are no hidden fees and transport is included.",
  },
  {
    q: "How much is rent?",
    a: `Single occupancy is ${kwacha(rooms[0].price)} per month, double is ${kwacha(rooms[1].price)} per student and quad is ${kwacha(rooms[2].price)} per student. ${site.offer}.`,
  },
  {
    q: "How far is campus?",
    a: `The residence is ${site.distanceKm} km from ${site.campus}. The shuttle runs daily to and from campus, both ways, at no extra cost.`,
  },
  {
    q: "How do I book a space?",
    a: `Send the booking form on this page or message us on WhatsApp at ${site.phoneDisplay}. Only ${site.spaces} spaces are available, so it is best to book early.`,
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <div className="wrap max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Good to know</h2>
        </div>

        <div className="mt-10 divide-y divide-navy/10 rounded-4xl border border-navy/10 bg-linen px-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-4">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-ink">{f.q}</span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-azure-mist text-azure">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
