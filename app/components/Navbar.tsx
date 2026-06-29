"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { site, telLink } from "@/lib/site";

const links = [
  { href: "#residence", label: "The Residence" },
  { href: "#rooms", label: "Rooms & Rent" },
  { href: "#amenities", label: "What's Included" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement strip */}
      <div className="bg-navy-deep text-white">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[12px] sm:text-[13px]">
          <span className="font-semibold text-gold">Now accepting bookings</span>
          <span className="hidden text-azure-soft sm:inline">·</span>
          <span>{site.offer}</span>
          <span className="hidden text-azure-soft sm:inline">·</span>
          <span className="text-azure-soft">{site.forWho}</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 shadow-[0_1px_0_rgba(16,58,92,0.10)] backdrop-blur"
            : "bg-paper/0"
        }`}
      >
        <nav className="wrap flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-navy/15">
              <Image src="/brand/logo.jpg" alt="" fill sizes="44px" className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-bold text-navy">
                Cerulean Commons
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-soft">
                Student Accommodation
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate transition-colors hover:text-azure"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href={telLink} className="btn-ghost text-sm">
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a href="#reserve" className="btn-primary">
              Reserve a space
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden">
            <div className="wrap flex flex-col gap-1 pb-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate hover:bg-azure-mist"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <a href={telLink} className="btn-ghost">
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a href="#reserve" onClick={() => setOpen(false)} className="btn-primary">
                  Reserve a space
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
