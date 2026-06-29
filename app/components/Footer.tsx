import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Dove from "./Dove";
import { site, waLink, telLink } from "@/lib/site";

const links = [
  { href: "#residence", label: "The Residence" },
  { href: "#rooms", label: "Rooms & Rent" },
  { href: "#amenities", label: "What's Included" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#reserve", label: "Reserve a space" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      {/* CTA band */}
      <div className="border-b border-white/10 bg-navy">
        <div className="wrap flex flex-col items-center gap-5 py-12 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Ready to make Cerulean Commons your home?
          </h2>
          <p className="max-w-xl text-white/75">
            {site.spaces} spaces, all inclusive, {site.distanceKm} km from {site.campus}.
            Reserve yours today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#reserve" className="btn-gold">
              Reserve a space
            </a>
            <a
              href={waLink(`Hi Cerulean Commons, I'd like to book a space.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <Dove
        className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 text-white/[0.04]"
        title=""
      />

      <div className="wrap relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image src="/brand/logo.jpg" alt="" fill sizes="48px" className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold">Cerulean Commons</span>
              <span className="block text-xs uppercase tracking-[0.18em] text-azure-soft">
                Student Accommodation
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm font-script text-2xl text-gold">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-sm text-white/65">
            {site.forWho}. Safe, modern, all-inclusive student living in {site.area}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/80 hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telLink} className="flex items-center gap-2 text-white/80 hover:text-gold">
                <Phone className="h-4 w-4 text-azure-soft" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink("Hi Cerulean Commons")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-azure-soft" />
                WhatsApp us
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4 text-azure-soft" />
              {site.area}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Cerulean Commons Student Accommodation.</p>
          <p>{site.area} · {site.forWho}</p>
        </div>
      </div>
    </footer>
  );
}
