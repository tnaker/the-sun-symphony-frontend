"use client"
// components/artist-bio.tsx
// -----------------------------------------------------------------------------
// Artist Biography component. Features a staggered zig-zag layout matching the 
// PDF portfolio. Text on one side, image placeholders on the other.
// -----------------------------------------------------------------------------
import { Globe, Camera, PlaySquare, Music2, Star, Sparkles, Mic2 } from "lucide-react"
import Link from "next/link"

export function ArtistBiography() {
  return (
    <section className="w-full overflow-hidden bg-transparent px-4 py-16 md:px-8 md:py-24">
      
      {/* HEADER: Tên nghệ sĩ */}
      <div className="mx-auto mb-20 flex max-w-7xl flex-col items-center text-center">
        {/* Đồng bộ: Giữ nguyên size/tracking của bạn, nhưng tăng nền lên white/90 để không bị lóa */}
        <span className="mb-4 rounded-full border border-white/50 bg-white/90 px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.5em] text-primary shadow-sm backdrop-blur-md">
          About Me
        </span>
        <h1 className="flex flex-wrap items-baseline justify-center gap-x-4 font-display uppercase leading-[0.9]">
          <span className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[0.15em] text-foreground drop-shadow-md">
            LANY
          </span>
          <span className="bg-gradient-to-br from-primary via-pink-400 to-secondary bg-clip-text text-[clamp(4rem,9vw,8rem)] font-black tracking-widest text-transparent drop-shadow-[0_0_30px_rgba(255,183,221,0.6)]">
            S.
          </span>
        </h1>
      </div>

      <div className="mx-auto max-w-7xl space-y-32">
        
        {/* =========================================
            PHÂN ĐOẠN 1: ABOUT ME & MUSICAL VISION (TRANG 2-3)
            Layout: Chữ bên Trái - Ảnh bên Phải
        ========================================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Cột Nội Dung */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="mb-8 font-display text-4xl uppercase tracking-tight text-foreground md:text-5xl">
              Sự biến hóa <span className="text-primary">đa màu sắc</span>
            </h2>
            
            {/* Đồng bộ: Thêm font-medium và text-slate-800 để chữ mướt và nét hơn */}
            <div className="space-y-6 text-base font-medium leading-relaxed text-slate-800 md:text-lg">
              <p>
                Mình yêu thích sự biến hóa đa màu sắc trong nghệ thuật. Mình có thể thể hiện tốt nhiều dòng nhạc khác nhau (ballad, pop, funky, edm, kpop,...) và tự tin với khả năng giao tiếp trình diễn vũ đạo của bản thân.
              </p>
              <p>
                Trong công việc, mình đề cao sự linh hoạt, tinh thần cầu thị và luôn cam kết mang đến những sản phẩm chỉnh chu, chất lượng nhất.
              </p>

              <blockquote className="my-8 rounded-r-2xl border-l-4 border-primary bg-card/40 py-6 pl-8 pr-6 font-display text-2xl uppercase italic leading-snug text-foreground shadow-lg backdrop-blur-md">
                "Mong muốn thế giới âm nhạc của bản thân sẽ kết nối, chia sẻ và truyền cảm hứng tới mọi người."
              </blockquote>

              <div className="rounded-[1.75rem] border border-white/40 bg-card/40 p-8 shadow-xl backdrop-blur-xl">
                <h3 className="mb-4 flex items-center gap-3 font-display text-2xl uppercase tracking-wide text-foreground">
                  <Star className="size-6 text-primary" /> Musical Vision
                </h3>
                <p className="text-base font-medium leading-8 text-slate-800">
                  <strong className="font-bold text-foreground">Tư duy Âm nhạc Đa chiều:</strong> Sở hữu chất giọng linh hoạt, mình có khả năng biến hóa nhiều phong cách và trình diễn đa ngôn ngữ: tiếng Việt, tiếng Anh, tiếng Hàn, tiếng Trung,... Ham học hỏi và luôn biết cách "làm mới" bài hát để tạo dấu ấn riêng. Ưu tiên cốt lõi là cảm xúc và sự thăng hoa trong âm nhạc.
                </p>
              </div>
            </div>
          </div>
          {/* Cột Hình Ảnh */}
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                {/* ẢNH GIẢ LẬP: Chân dung Musical Vision */}
                <img src="/images/musical.jpg" alt="Musical Vision" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            PHÂN ĐOẠN 2: VISUAL AESTHETICS (TRANG 4)
            Layout: Ảnh bên Trái - Chữ bên Phải
        ========================================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Cột Hình Ảnh (Đảo lên trước trên Desktop) */}
          <div className="relative order-last lg:order-first lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                {/* ẢNH GIẢ LẬP: Thời trang / Concept */}
                <img src="/images/visual.jpg" alt="Visual Aesthetics" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
          {/* Cột Nội Dung */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="mb-8 font-display text-4xl uppercase tracking-tight text-foreground md:text-5xl">
              Tư duy <span className="text-primary">Hình ảnh</span>
            </h2>
            <div className="rounded-[1.5rem] border border-white/40 bg-card/40 p-8 shadow-xl backdrop-blur-xl">
              <h3 className="mb-4 flex items-center gap-3 font-display text-2xl uppercase tracking-wide text-foreground">
                <Sparkles className="size-8 text-primary" /> Visual Aesthetics
              </h3>
              <p className="text-base font-medium leading-relaxed text-slate-800 md:text-lg">
                <strong className="font-bold text-foreground">Bản lĩnh Sân khấu & Tư duy Hình ảnh:</strong> Không chỉ tự tin với kỹ năng vũ đạo và khả năng làm chủ sân khấu, mình còn đặc biệt khắt khe với phần "nhìn". 
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-800 md:text-lg">
                Nhờ có tư duy về thiết kế và thời trang, mình luôn tự tay chăm chút, chọn lựa concept và đầu tư kỹ lưỡng cho phục trang để mỗi lần xuất hiện đều là một LANY S tỏa sáng nhất.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            PHÂN ĐOẠN 3: EXPERIENCES (TRANG 5, 6, 7)
            Layout: Chữ bên Trái - Lưới Ảnh bên Phải
        ========================================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Cột Nội Dung */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <h2 className="mb-8 font-display text-4xl uppercase tracking-tight text-foreground md:text-5xl">
              Kinh nghiệm <span className="text-primary">Thực chiến</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex min-h-[220px] flex-col justify-center rounded-[1.75rem] border border-white/40 bg-card/40 p-8 shadow-xl backdrop-blur-xl">
                 
              <h3 className="mb-4 flex items-center gap-3 font-display text-2xl uppercase tracking-wide text-foreground">
                <Mic2 className="mb-1 size-6 text-primary" /> Experience & Stage Presence
              </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-800 md:text-base">
                  Luôn biết cách làm chủ không khí và điều chỉnh năng lượng phù hợp với từng tệp khán giả. Sở hữu kinh nghiệm biểu diễn phong phú tại đa dạng các sân khấu, từ những không gian Acoustic Bar Lullaby, Elisa Floating Restaurant sang trọng đến các sự kiện quy mô lớn.
                </p>
              </div>

              <div className="flex min-h-[260px] flex-col justify-center rounded-[1.75rem] border border-white/40 bg-card/40 p-8 shadow-xl backdrop-blur-xl">
                <p className="text-sm font-medium leading-relaxed text-slate-800 md:text-base">
                  Từng cọ xát và rèn luyện bản lĩnh sân khấu qua các gameshow âm nhạc và chương trình truyền hình, đảm bảo khả năng xử lý tình huống chuyên nghiệp trước ống kính.
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-800 md:text-base">
                  Có kinh nghiệm làm việc và đứng chung sân khấu với các nghệ sĩ tên tuổi. Quá trình này không chỉ giúp mình mài giũa chuyên môn mà còn rèn luyện tác phong làm việc kỷ luật, chỉnh chu và đáp ứng được các tiêu chuẩn khắt khe của ngành giải trí.
                </p>
              </div>
            </div>
          </div>

          {/* Cột Hình Ảnh (Lưới 3 ảnh mô phỏng trang 5-6-7) */}
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/40 shadow-xl">
                {/* ẢNH GIẢ LẬP: Sự kiện quy mô lớn */}
                <img src="/images/ex1.jpg" alt="Stage Experience" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.5rem] border border-white/40 shadow-xl">
                {/* ẢNH GIẢ LẬP: Acoustic / Bar */}
                <img src="/images/ex2.jpg" alt="Acoustic Show" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.5rem] border border-white/40 shadow-xl">
                {/* ẢNH GIẢ LẬP: Gameshow / Truyền hình */}
                <img src="/images/ex3.jpg" alt="Gameshow Experience" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            LIÊN HỆ MẠNG XÃ HỘI
        ========================================= */}
        <div className="mt-14 border-t border-white/30 pt-12 text-center">
          {/* Đồng bộ: Giữ nguyên size text-sm và tracking-[0.5em] của bạn */}
<Link
  href="/contact"
  className="mb-6 inline-block rounded-full border border-white/50 bg-white/90 px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.5em] text-primary shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
>
  Connect with me
</Link>
<div className="flex flex-wrap items-center justify-center gap-6">
  {/* Website */}
  <a
    href="https://www.facebook.com/lanys.artist"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex size-14 items-center justify-center rounded-full border border-white/50 bg-card/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white"
    aria-label="Facebook"
  >
    <Globe className="size-6 text-slate-800 transition-colors group-hover:text-primary" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/lanys.artist/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex size-14 items-center justify-center rounded-full border border-white/50 bg-card/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white"
    aria-label="Instagram"
  >
    <Camera className="size-6 text-slate-800 transition-colors group-hover:text-primary" />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@lanys.artist"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex size-14 items-center justify-center rounded-full border border-white/50 bg-card/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white"
    aria-label="YouTube"
  >
    <PlaySquare className="size-6 text-slate-800 transition-colors group-hover:text-primary" />
  </a>

  {/* TikTok hoặc Spotify */}
  <a
    href="https://www.tiktok.com/@lanys.artist"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex size-14 items-center justify-center rounded-full border border-white/50 bg-card/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white"
    aria-label="TikTok"
  >
    <Music2 className="size-6 text-slate-800 transition-colors group-hover:text-primary" />
  </a>
</div>
          {/* Đồng bộ: Thêm font-bold cho username dễ đọc */}
          <p className="mt-6 font-mono text-sm font-bold tracking-widest text-slate-800">@lanys.artist</p>
        </div>

      </div>
    </section>
  )
}