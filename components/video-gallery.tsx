"use client"

/**
 * VideoGallery
 * ------------------------------------------------------------------
 * A responsive grid of video thumbnails with a play-on-hover overlay
 * and a full-screen playback modal (16:9 iframe container).
 *
 * Standalone component — import into any layout:
 *   import { VideoGallery } from "@/components/video-gallery"
 *
 * Uses the site's dark theme tokens + Anton display / mono typography.
 * ------------------------------------------------------------------
 */

import { useEffect, useState } from "react"
import { Play, X, Calendar } from "lucide-react"

// --- Dummy data (Vietnamese) -----------------------------------------
type Video = {
  id: number
  title: string
  year: number
  thumbnail: string
  // In a real app this would be a YouTube embed URL.
  embedUrl: string
}

const VIDEOS: Video[] = [
  {
    id: 1,
    title: "Đêm Diễn Live Tại Mỹ Đình",
    year: 2025,
    thumbnail: "/images/video-live-hanoi.png",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "MV Chính Thức — Nở Trong Tĩnh Lặng",
    year: 2025,
    thumbnail: "/images/video-mv-static-bloom.png",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Phiên Bản Acoustic Mộc",
    year: 2024,
    thumbnail: "/images/video-acoustic.png",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Hậu Trường Chuyến Lưu Diễn",
    year: 2024,
    thumbnail: "/images/video-behind-scenes.png",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Nhật Ký Phòng Thu",
    year: 2024,
    thumbnail: "/images/video-studio.png",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Cháy Hết Mình Tại Đại Nhạc Hội",
    year: 2023,
    thumbnail: "/images/video-festival.png",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function VideoGallery() {
  // Tracks which video is open in the modal (null = closed).
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  // Close on Escape key + lock body scroll while the modal is open.
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
    <section className="w-full bg-background px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* --- Section header --- */}
        <div className="mb-10 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Thư Viện Video
          </span>
          <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight text-foreground md:text-5xl">
            Khoảnh Khắc Trên Sân Khấu
          </h2>
        </div>

        {/* --- Thumbnail grid --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Phát video: ${video.title}`}
            >
              {/* Thumbnail with 16:9 ratio + hover play overlay */}
              <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Dark tint that lifts on hover */}
                <div className="absolute inset-0 bg-background/50 transition-colors duration-300 group-hover:bg-background/20" />

                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 translate-y-2 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play className="size-6 translate-x-0.5 fill-current" aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-pretty font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {video.title}
                </h3>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground">
                  <Calendar className="size-3.5" aria-hidden="true" />
                  {video.year}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- Playback Modal (Cửa sổ nổi) --- */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          {/* Inner container — stops backdrop click from closing when clicked */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:-top-14"
              aria-label="Đóng cửa sổ video"
            >
              Đóng
              <span className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
                <X className="size-5" aria-hidden="true" />
              </span>
            </button>

            {/* 16:9 iframe container */}
            <div className="aspect-video w-full overflow-hidden rounded-sm border border-border bg-black shadow-2xl">
              <iframe
                className="h-full w-full"
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal caption */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <h3 className="text-balance font-display text-2xl uppercase tracking-tight text-foreground md:text-3xl">
                {activeVideo.title}
              </h3>
              <span className="shrink-0 font-mono text-sm text-primary">
                {activeVideo.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
