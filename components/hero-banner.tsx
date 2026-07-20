// components/hero-banner.tsx
// -----------------------------------------------------------------------------
// Full viewport-height artist showcase. Dark image background with giant,
// overlapping typography for the artist name and a sleek CTA.
// -----------------------------------------------------------------------------
import { Play } from 'lucide-react'

export function HeroBanner() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center overflow-hidden">
      <img
        src="/images/homepage_artist.jpg"
        alt="LANY S biểu diễn live trên sân khấu mờ khói"
        className="absolute inset-0 h-full w-full scale-[1.05] object-cover opacity-100 brightness-[1.05] saturate-[1.1] contrast-[1.04]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.05),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,183,221,0.05),transparent_34%)]"
      />

<div className="relative z-10 flex h-full w-full items-end px-8 pb-10 md:px-12 lg:px-16">

<div
  className="
    w-fit
    max-w-4xl
    rounded-[1.8rem]
    border border-white/15
    bg-white/[0.02]
    backdrop-blur-md
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    px-6
    py-4
  "
>

    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      {/* DESCRIPTION -------------------------------- */}

      <div className="flex-1">

        <p className="max-w-3xl text-lg leading-9 font-medium text-foreground/90 drop-shadow-sm">
          Chào mừng đến với Website của LANY S. 
          Đây là nơi mình thể hiện những gì mình đã làm và đạt được ngày hôm nay.
          Mong rằng những giá trị mình muốn truyền đạt sẽ chạm đến những nguười dõi theo mình.

        </p>

      </div>


      {/* BUTTON ------------------------------------- */}

      <div className="shrink-0 self-start md:self-auto">

        <a
          href="/artist"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-pink-300/70
            bg-white/70
            px-8
            py-4
            font-mono
            text-sm
            font-bold
            uppercase
            tracking-[0.35em]
            text-slate-900
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-pink-500
            hover:text-white
            hover:border-pink-500
            hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]
          "
        >
          <Play className="size-5 fill-current transition-transform group-hover:scale-110" />

          Đọc Thêm

        </a>

      </div>

    </div>

  </div>

</div>

      <span className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/70 md:bottom-8">
        Cuộn Xuống
      </span>
    </section>
  )
}