// components/tracks-table.tsx
// Full-width admin table for managing a band's tracks.
// Standalone component — import it into any existing layout:
//   import { TracksTable } from "@/components/tracks-table"
"use client"

import { useState } from "react"
import { Pencil, Trash2, Music2, ArrowUpDown } from "lucide-react"

// --- Types -----------------------------------------------------------------
type TrackStatus = "published" | "draft"

interface Track {
  id: string
  title: string
  releaseDate: string // ISO date
  streams: number
  status: TrackStatus
}

// --- Dummy data (Vietnamese) ----------------------------------------------
const INITIAL_TRACKS: Track[] = [
  {
    id: "1",
    title: "Nắng Giao Hưởng",
    releaseDate: "2024-11-15",
    streams: 1284530,
    status: "published",
  },
  {
    id: "2",
    title: "Nhịp Bass Đêm Trắng",
    releaseDate: "2024-09-02",
    streams: 842190,
    status: "published",
  },
  {
    id: "3",
    title: "Ánh Đèn Sân Khấu",
    releaseDate: "2025-01-20",
    streams: 12045,
    status: "draft",
  },
  {
    id: "4",
    title: "Lời Ca Chưa Kể",
    releaseDate: "2025-02-08",
    streams: 0,
    status: "draft",
  },
  {
    id: "5",
    title: "Hòa Âm Phố Cũ",
    releaseDate: "2024-06-27",
    streams: 563874,
    status: "published",
  },
]

// --- Helpers ---------------------------------------------------------------
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

function formatStreams(n: number) {
  return n.toLocaleString("vi-VN")
}

// --- Status badge sub-component -------------------------------------------
function StatusBadge({ status }: { status: TrackStatus }) {
  const isPublished = status === "published"
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider ${
        isPublished
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-muted text-muted-foreground"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${isPublished ? "bg-primary" : "bg-muted-foreground"}`}
        aria-hidden="true"
      />
      {isPublished ? "Đã phát hành" : "Bản nháp"}
    </span>
  )
}

// --- Main component --------------------------------------------------------
export function TracksTable() {
  const [tracks, setTracks] = useState<Track[]>(INITIAL_TRACKS)

  function handleDelete(id: string) {
    setTracks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <section className="w-full rounded-lg border border-border bg-card">
      {/* Header */}
      <div className="flex flex-col gap-1 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Music2 className="size-5 text-primary" aria-hidden="true" />
          <h2 className="font-display text-lg uppercase tracking-wide text-card-foreground">
            Quản Lý Bài Hát
          </h2>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {tracks.length} bài hát
        </p>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  Tên Bài Hát
                  <ArrowUpDown className="size-3" aria-hidden="true" />
                </span>
              </th>
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Ngày Phát Hành
              </th>
              <th scope="col" className="px-5 py-3 text-right font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tổng Lượt Nghe
              </th>
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Trạng Thái
              </th>
              <th scope="col" className="px-5 py-3 text-right font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Thao Tác
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr
                key={track.id}
                className="border-b border-border/60 transition-colors last:border-b-0 hover:bg-muted/50"
              >
                <td className="px-5 py-4 font-medium text-card-foreground">
                  {track.title}
                </td>
                <td className="px-5 py-4 text-sm text-muted-foreground">
                  {formatDate(track.releaseDate)}
                </td>
                <td className="px-5 py-4 text-right font-mono text-sm tabular-nums text-card-foreground">
                  {formatStreams(track.streams)}
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={track.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                      aria-label={`Chỉnh sửa ${track.title}`}
                    >
                      <Pencil className="size-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(track.id)}
                      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive focus-visible:outline-2 focus-visible:outline-ring"
                      aria-label={`Xóa ${track.title}`}
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {tracks.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-sm text-muted-foreground">
                  Chưa có bài hát nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}