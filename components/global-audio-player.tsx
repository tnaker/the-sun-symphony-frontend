'use client'

// components/global-audio-player.tsx
// -----------------------------------------------------------------------------
// Sticky bottom player. Flat design with track info (cover/title/artist),
// transport controls (prev/play-pause/next), a scrubbable progress bar and a
// volume slider. Progress is simulated for this showcase (no real audio file).
// -----------------------------------------------------------------------------
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react'

interface Track {
  title: string
  artist: string
  cover: string
  duration: number // seconds
}

const PLAYLIST: Track[] = [
  { title: 'Static Bloom', artist: 'The Sun Symphony', cover: '/images/track-cover.png', duration: 214 },
  { title: 'Low End Theory', artist: 'The Sun Symphony', cover: '/images/track-cover.png', duration: 187 },
  { title: 'Backing Lights', artist: 'The Sun Symphony', cover: '/images/track-cover.png', duration: 243 },
]

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function GlobalAudioPlayer() {
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // seconds
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = PLAYLIST[trackIndex]

  // Simulated playback clock.
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= track.duration) {
            return 0 // loop / advance handled below
          }
          return p + 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, track.duration])

  const changeTrack = useCallback((dir: 1 | -1) => {
    setTrackIndex((i) => (i + dir + PLAYLIST.length) % PLAYLIST.length)
    setProgress(0)
  }, [])

  // Auto-advance when a track finishes.
  useEffect(() => {
    if (progress >= track.duration) {
      changeTrack(1)
    }
  }, [progress, track.duration, changeTrack])

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value))
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const effectiveVolume = muted ? 0 : volume
  const progressPct = (progress / track.duration) * 100

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-card/95 backdrop-blur">
      <audio ref={audioRef} src="/demo-track.mp3" preload="metadata" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:gap-6 md:py-4">
        {/* --- Track info (left) --- */}
        <div className="flex min-w-0 items-center gap-3 md:w-64 md:shrink-0">
          <img
            src={track.cover || '/placeholder.svg'}
            alt={`${track.title} cover art`}
            className="size-12 shrink-0 border border-border object-cover"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-sm uppercase tracking-wide text-foreground">
              {track.title}
            </p>
            <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
          </div>
        </div>

        {/* --- Transport + progress (center) --- */}
        <div className="flex flex-1 items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => changeTrack(-1)}
              aria-label="Bài trước"
              className="grid size-9 place-items-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipBack className="size-5 fill-current" />
            </button>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Tạm dừng' : 'Phát'}
              className="grid size-11 place-items-center bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {isPlaying ? (
                <Pause className="size-5 fill-current" />
              ) : (
                <Play className="size-5 fill-current" />
              )}
            </button>
            <button
              type="button"
              onClick={() => changeTrack(1)}
              aria-label="Bài tiếp theo"
              className="grid size-9 place-items-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipForward className="size-5 fill-current" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex flex-1 items-center gap-3">
            <span className="w-10 shrink-0 text-right font-mono text-xs text-muted-foreground">
              {formatTime(progress)}
            </span>
            <input
              type="range"
              min={0}
              max={track.duration}
              value={progress}
              onChange={handleSeek}
              aria-label="Tua bài hát"
              className="slider h-1 flex-1 cursor-pointer appearance-none rounded-full bg-secondary"
              style={{
                background: `linear-gradient(to right, var(--primary) ${progressPct}%, var(--secondary) ${progressPct}%)`,
              }}
            />
            <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">
              {formatTime(track.duration)}
            </span>
          </div>
        </div>

        {/* --- Volume (right) --- */}
        <div className="hidden items-center gap-2 md:flex md:w-36">
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Bật tiếng' : 'Tắt tiếng'}
            className="grid size-9 place-items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            {muted || volume === 0 ? (
              <VolumeX className="size-5" />
            ) : (
              <Volume2 className="size-5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={effectiveVolume}
            onChange={(e) => {
              setVolume(Number(e.target.value))
              setMuted(false)
            }}
            aria-label="Âm lượng"
            className="slider h-1 flex-1 cursor-pointer appearance-none rounded-full"
            style={{
              background: `linear-gradient(to right, var(--primary) ${effectiveVolume * 100}%, var(--secondary) ${effectiveVolume * 100}%)`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
