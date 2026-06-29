import { getSupabase } from "./supabase";

export type Reservation = {
  fullName: string;
  phone: string;
  email: string;
  roomType: string;
  startMonth: string;
  message: string;
};

export type ReservationResult =
  | { ok: true; pending: boolean }
  | { ok: false; error: string };

// Single seam between the form and the backend.
// Today it stores nothing and reports success so the UI flow is complete.
// When Supabase is connected, only the marked block changes.
export async function createReservation(
  data: Reservation
): Promise<ReservationResult> {
  const supabase = getSupabase();

  // ---- Supabase path (active once env vars are set) -------------------
  // Expected table:
  //   create table reservations (
  //     id uuid primary key default gen_random_uuid(),
  //     created_at timestamptz default now(),
  //     full_name text not null,
  //     phone text not null,
  //     email text,
  //     room_type text not null,
  //     start_month text,
  //     message text
  //   );
  if (supabase) {
    const { error } = await supabase.from("reservations").insert({
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      room_type: data.roomType,
      start_month: data.startMonth,
      message: data.message,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true, pending: false };
  }

  // ---- Frontend-only fallback (no backend yet) ------------------------
  // Briefly simulate a request so the success state feels real.
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true, pending: true };
}
