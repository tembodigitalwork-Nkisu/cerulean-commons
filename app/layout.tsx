import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Dancing_Script } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${site.full} — ${site.area}`,
    template: `%s — ${site.name}`,
  },
  description: `Safe, modern, female-only student accommodation ${site.distanceKm} km from ${site.campus} in ${site.area}. All-inclusive rent with WiFi, daily campus shuttle, 24/7 security and backup power. Now accepting bookings.`,
  keywords: [
    "Cerulean Commons",
    "UNILUS Silverest accommodation",
    "student accommodation Lusaka",
    "female student hostel Lusaka",
    "Silverest boarding house",
  ],
  openGraph: {
    title: `${site.full}`,
    description: `Your home away from home. Female-only student accommodation ${site.distanceKm} km from ${site.campus}.`,
    type: "website",
    locale: "en_ZM",
  },
};

export const viewport: Viewport = {
  themeColor: "#103A5C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
