// Single source of truth for the real Cerulean Commons details.
// Pulled from the brand brief so copy stays accurate and consistent.

export const site = {
  name: "Cerulean Commons",
  full: "Cerulean Commons Student Accommodation",
  tagline: "Your home away from home.",
  forWho: "Female students only",
  campus: "UNILUS Silverest Campus",
  distanceKm: 3.5,
  spaces: 28,
  area: "Silverest, Lusaka",
  phoneDisplay: "0972 178 323",
  phoneRaw: "+260972178323",
  whatsapp: "260972178323",
  offer: "First 10 students save K250 off the first month",
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phoneRaw}`;

export type Room = {
  key: string;
  name: string;
  occupancy: string;
  price: number;
  per: string;
  note: string;
  highlight?: boolean;
};

export const rooms: Room[] = [
  {
    key: "single",
    name: "Single Occupancy",
    occupancy: "1 student",
    price: 3000,
    per: "per month",
    note: "A room of your own, not self contained.",
  },
  {
    key: "double",
    name: "Double Occupancy",
    occupancy: "2 students sharing",
    price: 2500,
    per: "per student / month",
    note: "Share with one roommate, not self contained.",
    highlight: true,
  },
  {
    key: "quad",
    name: "Quad Occupancy",
    occupancy: "4 students sharing",
    price: 2000,
    per: "per student / month",
    note: "Best value with three roommates, not self contained.",
  },
];

export const kwacha = (n: number) => `K${n.toLocaleString("en-ZM")}`;
