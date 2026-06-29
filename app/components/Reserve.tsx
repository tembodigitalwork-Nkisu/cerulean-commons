"use client";

import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { createReservation, type Reservation } from "@/lib/reservations";
import { rooms, kwacha, site, waLink, telLink } from "@/lib/site";

const empty: Reservation = {
  fullName: "",
  phone: "",
  email: "",
  roomType: rooms[0].name,
  startMonth: "",
  message: "",
};

export default function Reserve() {
  const [form, setForm] = useState<Reservation>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const update = (field: keyof Reservation) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim()) {
      setError("Please add your name and phone number so we can reach you.");
      return;
    }
    setError("");
    setStatus("sending");
    const res = await createReservation(form);
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  return (
    <section id="reserve" className="bg-paper py-20 sm:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: pitch + direct contact */}
        <div>
          <span className="eyebrow">Reserve a Space</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Book your room for the new term
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Only {site.spaces} spaces are available and they go quickly. Send your
            details and we will confirm availability and the next steps. {site.offer}.
          </p>

          <div className="mt-8 rounded-3xl border border-navy/10 bg-linen p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-soft">
              Rather talk to us?
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={waLink(
                  `Hi Cerulean Commons, I'd like to reserve a space at your ${site.area} residence.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-start"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp {site.phoneDisplay}
              </a>
              <a href={telLink} className="btn-ghost justify-start">
                <Phone className="h-4 w-4" />
                Call {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-soft">
              {site.forWho}. Prices from {kwacha(rooms[rooms.length - 1].price)} per
              student each month, all inclusive.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="card p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-azure" />
              <h3 className="mt-4 text-2xl font-bold">Thank you, {form.fullName.split(" ")[0] || "there"}</h3>
              <p className="mt-2 max-w-md text-slate">
                We have your details and will be in touch on {form.phone} to confirm your
                space. For a faster reply, message us on WhatsApp.
              </p>
              <a
                href={waLink(
                  `Hi Cerulean Commons, I just submitted a booking for the ${form.roomType}. My name is ${form.fullName}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6"
              >
                <MessageCircle className="h-4 w-4" />
                Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={update("fullName")}
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone number" required>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="097..."
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email (optional)">
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </Field>
                <Field label="Move-in month (optional)">
                  <input
                    type="text"
                    value={form.startMonth}
                    onChange={update("startMonth")}
                    className={inputClass}
                    placeholder="e.g. September"
                  />
                </Field>
              </div>

              <Field label="Room type">
                <select value={form.roomType} onChange={update("roomType")} className={inputClass}>
                  {rooms.map((r) => (
                    <option key={r.key} value={r.name}>
                      {r.name} — {kwacha(r.price)} {r.per}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Anything you'd like to ask? (optional)">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={3}
                  className={inputClass}
                  placeholder="Questions about rooms, the shuttle, move-in..."
                />
              </Field>

              {error && (
                <p className="rounded-xl bg-rose/10 px-4 py-3 text-sm text-rose">{error}</p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  "Send booking request"
                )}
              </button>
              <p className="text-center text-xs text-slate-soft">
                {site.forWho}. We only use your details to confirm your booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-ink placeholder:text-slate-soft/70 focus:border-azure focus:outline-none focus:ring-2 focus:ring-azure/30";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-rose"> *</span>}
      </span>
      {children}
    </label>
  );
}
