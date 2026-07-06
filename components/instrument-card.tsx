// components/instrument-card.tsx
// -----------------------------------------------------------------------------
// A single item in the InstrumentGallery. Strict bordered tile with a smooth
// hover effect (image scales up + accent color overlay fades in).
// -----------------------------------------------------------------------------
import { ArrowUpRight } from 'lucide-react'

export interface Instrument {
  name: string
  category: string
  description: string
  image: string
}

export function InstrumentCard({ instrument }: { instrument: Instrument }) {
  return (
    <article className="group relative flex flex-col border border-border bg-card transition-colors duration-300 hover:border-primary">
      {/* Image + overlay */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={instrument.image || '/placeholder.svg'}
          alt={instrument.name}
          className="h-full w-full object-cover grayscale-[35%] transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        {/* Accent color overlay that intensifies on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"
        />
        <span className="absolute left-0 top-0 m-3 border border-border bg-background/70 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground backdrop-blur">
          {instrument.category}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 items-start justify-between gap-3 border-t border-border p-5">
        <div>
          <h3 className="font-display text-xl uppercase leading-none tracking-wide text-foreground">
            {instrument.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {instrument.description}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}
