# Cerulean Commons Student Accommodation

Marketing site for Cerulean Commons, a female-only student residence 3.5 km from
UNILUS Silverest Campus in Silverest, Lusaka.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, with a booking
form ready to connect to **Supabase**.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.tsx        Fonts, metadata, favicons
  page.tsx          Section order for the landing page
  globals.css       Design tokens and component classes
  icon.svg          Dove favicon (browser tab)
  apple-icon.jpg    Apple touch icon (real logo)
  components/       Navbar, Hero, Rooms, Amenities, Gallery, Reserve, Footer ...
lib/
  site.ts           Single source of truth: contact, rooms, prices
  supabase.ts       Lazy Supabase client (null until env is set)
  reservations.ts   createReservation(): the one seam to the backend
public/
  brand/logo.jpg    Real Cerulean Commons logo
  images/           Real property photos
```

## Connecting Supabase (bookings)

The site runs fully without Supabase. When you are ready to store bookings:

1. Copy `.env.local.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Create the table in the Supabase SQL editor:

```sql
create table reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  phone text not null,
  email text,
  room_type text not null,
  start_month text,
  message text
);

alter table reservations enable row level security;

create policy "anon can insert reservations"
  on reservations for insert
  to anon
  with check (true);
```

3. Restart the dev server. `createReservation()` in `lib/reservations.ts`
   automatically switches from the demo path to real inserts. No UI changes needed.

## Editing content

Most facts (phone number, prices, spaces, distance) live in `lib/site.ts`.
Change them there and they update everywhere on the page.
