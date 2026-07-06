// components/hero-banner.tsx
// -----------------------------------------------------------------------------
// Full viewport-height artist showcase. Dark image background with giant,
// overlapping typography for the artist name and a sleek CTA.
// -----------------------------------------------------------------------------
import { Play } from 'lucide-react'
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
      {/* Dark image background */}
      <img
        src="/images/hero-artist.png"
        alt="The Sun Symphony biểu diễn live trên sân khấu mờ khói"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Darkening overlays for contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
      />

      {/* Top bar */}
      {/* <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-5 md:px-8">
        <span className="font-display text-lg uppercase tracking-widest text-foreground">
          NV<span className="text-primary">.</span>
        </span>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          <Link href="/instrument" className="transition-colors hover:text-foreground">
            Nhạc Cụ
          </Link>
          <Link href="/tour" className="transition-colors hover:text-foreground">
            Lịch Diễn
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Liên Hệ
          </Link>
        </nav>
      </header> */}

      {/* Centerpiece: giant overlapping typography */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <span className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-primary md:text-sm">
          Sống Động · Mạnh Mẽ · Chân Thực
        </span>

        <h1 className="flex flex-col items-center font-display uppercase leading-[0.8] text-foreground">
          <span className="text-[16vw] md:text-[13vw] lg:text-[11rem]">The Sun</span>
          <span className="-mt-[3vw] text-[16vw] text-primary md:-mt-6 md:text-[13vw] lg:text-[11rem]">
            Symphony
          </span>
        </h1>

        <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          Đam mê nhịp bass, cháy hết mình cùng những dải âm vocal. Ca khúc mới
          nhất đã ra mắt — hãy bật max âm lượng.
        </p>

        {/* Sleek CTA */}
        <a
          href="#"
          className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Play className="size-4 fill-current" aria-hidden="true" />
          Thưởng Thức Ca Khúc Mới
        </a>
      </div>

      {/* Scroll hint */}
      <span className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        Cuộn Xuống
      </span>
    </section>
  )
}
