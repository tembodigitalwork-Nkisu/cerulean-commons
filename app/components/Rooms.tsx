import { User, Users } from "lucide-react";
import Reveal from "./Reveal";
import { rooms, kwacha, site, waLink } from "@/lib/site";

function occupancyIcon(key: string) {
  return key === "single" ? User : Users;
}

export default function Rooms() {
  return (
    <section id="rooms" className="bg-navy py-20 text-white sm:py-28">
      <div className="wrap">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow text-azure-soft">Rooms & Rent</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Pick the room that fits your budget
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Every room is shared-bathroom (not self contained) and comes with the
              same all-inclusive rent. {site.offer}. All prices are per student, per
              month. Transport is included in the rent with no additional cost or
              hidden fees.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rooms.map((room, i) => {
            const Icon = occupancyIcon(room.key);
            return (
              <Reveal key={room.key} delay={i * 0.08}>
                <div className="relative flex h-full flex-col rounded-4xl border border-white/12 bg-white/[0.04] p-7 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-azure-soft">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {room.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/65">{room.occupancy}</p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-4xl font-extrabold text-white">
                      {kwacha(room.price)}
                    </span>
                    <span className="pb-1 text-sm text-white/60">/ {room.per.replace("per ", "")}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{room.note}</p>

                  <a
                    href={waLink(
                      `Hi Cerulean Commons, I'm interested in the ${room.name} room (${kwacha(room.price)} ${room.per}). Is a space still available?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn mt-6 border border-white/25 bg-white/5 text-white hover:bg-white/10 sm:mt-auto"
                  >
                    Reserve this room
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
