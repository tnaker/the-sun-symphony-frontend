"use client"

import { useEffect, useState } from "react"
import { Play, X, Sparkles, Music, Quote } from "lucide-react"

// --- Dữ liệu trích xuất từ Portfolio Trang 9 & Youtube ---
type Video = {
  id: number
  title: string
  year: number
  thumbnail: string
  embedUrl: string
}

const VIDEOS: Video[] = [
  {
    id: 1,
    title: "TÌNH TÌNH TỨ",
    year: 2025,
    thumbnail: "/images/tinhtu.jpg",
    embedUrl: "https://www.youtube.com/embed/NVs10J8DZTM",
  },
  {
    id: 2,
    title: "CON CŨNG MUỐN TẾT MÀ",
    year: 2026,
    thumbnail: "/images/concungmuontetma.jpg",
    embedUrl: "https://www.youtube.com/embed/jWUjvy17Q-I",
  },
  {
    id: 3,
    title: "THÍCH TẾT",
    year: 2025,
    thumbnail: "/images/thichtet.jpg",
    embedUrl: "https://www.youtube.com/embed/CAccDwUY9m0",
  },
]

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  useEffect(() => {
    if (!activeVideo) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [activeVideo])

  return (
    <section className="w-full bg-transparent px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* --- Section header --- */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-none tracking-tight text-foreground drop-shadow-sm">
            MUSIC VIDEOS
          </h2>
          
          <div className="mt-2 flex items-center justify-center gap-3 md:mt-4">
            <Sparkles className="size-5 text-primary md:size-8" />
            <span className="font-serif text-3xl italic text-primary md:text-5xl">
              Official Releases
            </span>
            <Sparkles className="size-5 text-primary md:size-8" />
          </div>
        </div>

        {/* --- Thumbnail grid (Kính mờ) --- */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-3 text-left shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Phát video: ${video.title}`}
            >
              {/* Thumbnail with 16:9 ratio */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] shadow-inner">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Lớp phủ sáng lên khi hover */}
                <div className="absolute inset-0 bg-primary/0 mix-blend-overlay transition-colors duration-300 group-hover:bg-primary/30" />

                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 translate-y-4 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play className="size-6 translate-x-0.5 fill-current" aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div className="px-3 pb-3 pt-5 flex items-start justify-between gap-3">
                <h3 className="text-balance font-display text-xl uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                  {video.title}
                </h3>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/40 bg-white/50 px-3 py-1 font-mono text-xs font-bold text-slate-700">
                  <Music className="size-3" aria-hidden="true" />
                  {video.year}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* --- Phần nội dung thiết kế lại dạng Quote Card --- */}
{/* --- Phần nội dung thiết kế lại: Bố cục so le nghệ thuật --- */}
        <div className="mx-auto mt-20 max-w-5xl px-4 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Điểm nhấn đồ họa (Bên trái) */}
            <div className="hidden md:flex size-24 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md">
              <Sparkles className="size-10 text-primary animate-pulse" />
            </div>

            {/* Đoạn văn bản (Lệch trái, căn lề trái) */}
            <div className="flex-1 border-l-2 border-primary pl-8 py-2">
              <p className="text-lg font-medium leading-relaxed text-foreground drop-shadow-sm md:text-xl italic">
                "Mỗi dự án âm nhạc dưới đây không chỉ là một cột mốc trong sự nghiệp, mà còn là một mảnh ghép tâm hồn mình. Mình đã gói ghém trọn vẹn sự chân thành và những dải năng lượng tích cực nhất vào từng giai điệu, để âm nhạc của mình có thể kết nối, chia sẻ và truyền cảm hứng đến tất cả khán giả."
              </p>
              <p className="mt-4 font-display text-lg uppercase tracking-[0.2em] text-primary">
                — LANY S —
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* --- Playback Modal (Cửa sổ nổi - Nền tối để video nổi bật) --- */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-md md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-primary md:-top-14"
              aria-label="Đóng cửa sổ video"
            >
              Đóng
              <span className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-colors hover:border-primary hover:bg-primary/20 hover:text-white">
                <X className="size-5" aria-hidden="true" />
              </span>
            </button>

            {/* 16:9 iframe container */}
            <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] border border-white/20 bg-black shadow-2xl">
              <iframe
                className="h-full w-full"
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal caption */}
            <div className="mt-6 flex items-center justify-between gap-3 px-2">
              <h3 className="text-balance font-display text-2xl uppercase tracking-tight text-white md:text-4xl">
                {activeVideo.title}
              </h3>
              <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-sm font-bold text-white">
                {activeVideo.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}