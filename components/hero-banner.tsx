"use client"

import { Play, PlaySquare, Globe, Camera } from 'lucide-react'

// Icon TikTok tự tạo (Vì thư viện Lucide mặc định chưa có icon TikTok chuẩn)
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function HeroBanner() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-transparent pt-24 md:pt-32">
      
      {/* 1. HIỆU ỨNG ÁNH SÁNG NỀN */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.02))]" />

      {/* 2. MAIN SHOWCASE (CHỮ + 4 ẢNH + SOCIALS) */}
      {/* Nới rộng max-width trên màn hình lớn (lg, xl, 2xl) */}
      <div className="relative z-10 flex w-full max-w-[95vw] flex-col items-center px-4 lg:max-w-[90vw] 2xl:max-w-[1600px]">
        
        {/* Tên L A N Y S - Tăng text size trên desktop lên cực đại */}
        <div className="mb-6 flex w-full max-w-4xl justify-between px-4 font-display text-[4rem] font-bold drop-shadow-[0_0_30px_rgba(255,183,221,0.6)] md:mb-10 md:px-12 lg:max-w-6xl lg:text-[9rem] xl:max-w-7xl xl:text-[10rem] 2xl:text-[11rem]">
          <span className="bg-gradient-to-br from-primary via-pink-400 to-secondary bg-clip-text text-transparent transition-transform duration-300 hover:-translate-y-2">L</span>
          <span className="bg-gradient-to-br from-primary via-pink-400 to-secondary bg-clip-text text-transparent transition-transform duration-300 hover:-translate-y-2">A</span>
          <span className="bg-gradient-to-br from-primary via-pink-400 to-secondary bg-clip-text text-transparent transition-transform duration-300 hover:-translate-y-2">N</span>
          <span className="bg-gradient-to-br from-primary via-pink-400 to-secondary bg-clip-text text-transparent transition-transform duration-300 hover:-translate-y-2">Y</span>
          <span className="bg-gradient-to-br from-primary via-pink-400 to-secondary bg-clip-text text-transparent transition-transform duration-300 hover:-translate-y-2">S</span>
        </div>

        {/* Lưới 4 ảnh nghệ sĩ - Tăng khoảng cách (gap) trên desktop */}
        <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4 md:gap-6 xl:gap-8 2xl:gap-12">
          <div className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <img src="/images/hp1.jpg" alt="Lany 1" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <img src="/images/hp2.jpg" alt="Lany 2" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <img src="/images/hp3.jpg" alt="Lany 3" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <img src="/images/hp4.jpg" alt="Lany 4" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* Social Links & Nhãn hiệu - Phóng to icon và text trên desktop */}
        <div className="mt-6 flex w-full flex-col items-center justify-end gap-4 md:mt-10 md:flex-row md:gap-8 2xl:mt-12">
          <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
            <a href="https://www.youtube.com/@lanys.artist" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-transform hover:scale-110 lg:size-12 2xl:size-14">
              <PlaySquare className="size-5 lg:size-6 2xl:size-7" />
            </a>
            <a href="https://www.facebook.com/lanys.artist" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform hover:scale-110 lg:size-12 2xl:size-14">
              <Globe className="size-5 lg:size-6 2xl:size-7" />
            </a>
            <a href="https://www.instagram.com/lanys.artist/" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white shadow-md transition-transform hover:scale-110 lg:size-12 2xl:size-14">
              <Camera className="size-5 lg:size-6 2xl:size-7" />
            </a>
            <a href="https://www.tiktok.com/@lanys.artist" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-md transition-transform hover:scale-110 lg:size-12 2xl:size-14">
              <TiktokIcon className="size-5 lg:size-6 2xl:size-7" />
            </a>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="font-display text-2xl uppercase tracking-wider text-pink-500 lg:text-3xl 2xl:text-4xl">LANY S</span>
            <span className="font-mono text-xs font-bold text-slate-500 lg:text-sm">@lanys.artist</span>
          </div>
        </div>
      </div>

      {/* 3. KHỐI KÍNH MỜ (CHÀO MỪNG) - Tăng kích thước hộp hiển thị trên màn hình lớn */}
      <div className="relative z-20 w-full px-4 pb-8 pt-12 md:px-12 md:pb-12 lg:px-16 2xl:pb-16">
        <div className="mx-auto w-full max-w-5xl rounded-[1.8rem] border border-white/40 bg-white/60 px-6 py-6 shadow-2xl backdrop-blur-xl md:px-10 md:py-10 lg:max-w-6xl xl:max-w-7xl xl:px-14 xl:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* TEXT */}
            <div className="flex-1">
              <p className="max-w-4xl text-sm font-medium leading-relaxed text-foreground md:text-lg md:leading-9 xl:text-xl xl:leading-10">
                Chào mừng đến với Website của LANY S. Đây là nơi mình thể hiện
                những gì mình đã làm và đạt được ngày hôm nay. Mong rằng những
                giá trị mình muốn truyền đạt sẽ chạm đến những người dõi theo
                mình.
              </p>
            </div>

            {/* CTA BUTTON */}
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

    </section>
  )
}