// app/page.tsx
// -----------------------------------------------------------------------------
// Music showcase landing page. Composes the three required components:
//   <HeroBanner />         -> components/hero-banner.tsx
//   <InstrumentGallery />  -> components/instrument-gallery.tsx (+ instrument-card.tsx)
//   <GlobalAudioPlayer />  -> components/global-audio-player.tsx (sticky bottom)
// -----------------------------------------------------------------------------
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import { HeroBanner } from '@/components/hero-banner'
import { InstrumentGallery } from '@/components/instrument-gallery'
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero banner */}
      <HeroBanner />
      <InstrumentGallery />

      {/* Simple closing band */}
      <section className="border-t border-border px-4 py-24 text-center md:px-8">
        <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
          Đón chờ đêm diễn <span className="text-primary">tiếp theo</span>
        </h2>
      <Link
        href="/tour"
        className="mt-8 inline-block border border-border px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        Xem Lịch Diễn
      </Link>
      </section>

      {/* Spacer so the fixed player never covers footer content */}
      <div aria-hidden="true" className="h-28 md:h-24" />

    </main>
  )
}
