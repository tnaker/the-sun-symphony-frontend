import { MapPin, Ticket } from "lucide-react"

// ============================================================
// TourList — standalone "Lịch Diễn" (Tour Schedule) component
// Import with: import { TourList } from "@/components/tour-list"
// ============================================================

type Show = {
  day: string
  month: string
  city: string
  venue: string
  soldOut?: boolean
}

// Dummy data (Vietnamese)
const SHOWS: Show[] = [
  { day: "15", month: "THG 11", city: "Hà Nội", venue: "Sân Vận Động Mỹ Đình" },
  { day: "22", month: "THG 11", city: "Đà Nẵng", venue: "Cung Thể Thao Tiên Sơn" },
  { day: "30", month: "THG 11", city: "Huế", venue: "Quảng Trường Ngọ Môn", soldOut: true },
  { day: "07", month: "THG 12", city: "Nha Trang", venue: "Quảng Trường 2 Tháng 4" },
  { day: "14", month: "THG 12", city: "TP. Hồ Chí Minh", venue: "Sân Vận Động Phú Thọ" },
  { day: "21", month: "THG 12", city: "Cần Thơ", venue: "Nhà Thi Đấu Cần Thơ", soldOut: true },
]

export function TourList() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Lưu Diễn 2025</span>
          <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl">
            Lịch Diễn
          </h2>
        </div>

        {/* List */}
        <ul className="border-t border-border">
          {SHOWS.map((show, i) => (
            <li
              key={`${show.city}-${i}`}
              className="group flex flex-col gap-4 border-b border-border py-6 transition-colors hover:bg-card/60 sm:flex-row sm:items-center sm:gap-6 sm:px-2"
            >
              {/* Date */}
              <div className="flex min-w-[4.5rem] flex-col items-start sm:items-center">
                <span className="font-display text-4xl leading-none text-primary md:text-5xl">{show.day}</span>
                <span className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {show.month}
                </span>
              </div>

              {/* Divider (desktop) */}
              <div className="hidden h-12 w-px bg-border sm:block" aria-hidden="true" />

              {/* City & Venue */}
              <div className="flex-1">
                <h3 className="text-balance text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                  {show.city}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm leading-relaxed text-muted-foreground">
                  <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {show.venue}
                </p>
              </div>

              {/* CTA */}
              <div className="sm:ml-auto">
                {show.soldOut ? (
                  <button
                    type="button"
                    disabled
                    className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:w-auto"
                  >
                    Hết Vé
                  </button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                  >
                    <Ticket className="size-4" aria-hidden="true" />
                    Mua Vé
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
