// components/tracks-table.tsx
// Full-width admin table for managing a band's tracks.
// Includes Create, Read, Update, Delete (CRUD) operations on local state.
"use client"

import { useState } from "react"
import { Pencil, Trash2, Music2, ArrowUpDown, Plus, X } from "lucide-react"

// --- Types -----------------------------------------------------------------
type TrackStatus = "published" | "draft"

interface Track {
  id: string
  title: string
  releaseDate: string // ISO date (YYYY-MM-DD)
  streams: number
  status: TrackStatus
}

// --- Dummy data -----------------------------------------------------------
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
]

// --- Helpers ---------------------------------------------------------------
function formatDate(iso: string) {
  if (!iso) return ""
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
  
  // States cho Form Thêm/Sửa
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTrack, setEditingTrack] = useState<Track | null>(null)

  // XÓA bài hát
  function handleDelete(id: string) {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài hát này?")) {
      setTracks((prev) => prev.filter((t) => t.id !== id))
    }
  }

  // MỞ Modal Thêm mới
  function handleOpenAdd() {
    setEditingTrack(null)
    setIsModalOpen(true)
  }

  // MỞ Modal Sửa
  function handleOpenEdit(track: Track) {
    setEditingTrack(track)
    setIsModalOpen(true)
  }

  // ĐÓNG Modal
  function handleCloseModal() {
    setIsModalOpen(false)
    setEditingTrack(null)
  }

  // LƯU bài hát (Thêm hoặc Sửa)
  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newTrack: Track = {
      id: editingTrack ? editingTrack.id : Date.now().toString(), // Tạo ID tạm nếu thêm mới
      title: formData.get("title") as string,
      releaseDate: formData.get("releaseDate") as string,
      streams: Number(formData.get("streams")),
      status: formData.get("status") as TrackStatus,
    }

    if (editingTrack) {
      // Cập nhật bài hát hiện có
      setTracks((prev) => prev.map((t) => (t.id === newTrack.id ? newTrack : t)))
    } else {
      // Thêm bài hát mới lên đầu danh sách
      setTracks((prev) => [newTrack, ...prev])
    }
    
    handleCloseModal()
  }

  return (
    <div className="space-y-4">
      {/* Header Panel */}
      <section className="w-full rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-4 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Music2 className="size-5 text-primary" aria-hidden="true" />
            <h2 className="font-display text-lg uppercase tracking-wide text-card-foreground">
              Quản Lý Bài Hát
            </h2>
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
              {tracks.length} bài hát
            </span>
          </div>
          
          {/* Nút Thêm Mới */}
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="size-4" />
            Thêm bài hát
          </button>
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
                      {/* Nút Sửa */}
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(track)}
                        className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                        aria-label={`Chỉnh sửa ${track.title}`}
                      >
                        <Pencil className="size-4" aria-hidden="true" />
                      </button>
                      
                      {/* Nút Xóa */}
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
                    Chưa có bài hát nào. Hãy bấm "Thêm bài hát" để tạo mới.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- Modal Form Thêm / Sửa --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-5 py-4">
              <h3 className="font-display text-lg uppercase tracking-wide text-card-foreground">
                {editingTrack ? "Sửa bài hát" : "Thêm bài hát mới"}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSave} className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="title" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tên bài hát</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  defaultValue={editingTrack?.title || ""}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Ví dụ: Nắng Giao Hưởng..."
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="releaseDate" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Ngày phát hành</label>
                <input
                  id="releaseDate"
                  name="releaseDate"
                  type="date"
                  required
                  defaultValue={editingTrack?.releaseDate || ""}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="streams" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tổng lượt nghe</label>
                <input
                  id="streams"
                  name="streams"
                  type="number"
                  min="0"
                  required
                  defaultValue={editingTrack?.streams || 0}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="status" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Trạng thái</label>
                <select
                  id="status"
                  name="status"
                  defaultValue={editingTrack?.status || "draft"}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="draft">Bản nháp</option>
                  <option value="published">Đã phát hành</option>
                </select>
              </div>

              {/* Modal Actions */}
              <div className="mt-4 flex justify-end gap-3 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-md border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-muted"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                >
                  Lưu bài hát
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}