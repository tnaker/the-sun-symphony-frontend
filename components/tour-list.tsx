"use client"

import { useState, useEffect } from "react"
import { MapPin, Ticket, Plus, Pencil, Trash2, X, CheckCircle } from "lucide-react"

// ============================================================
// TourList — Lịch diễn kết hợp Admin thao tác & Khách mua vé
// ============================================================

type Show = {
  id: string
  day: string
  month: string
  city: string
  venue: string
  soldOut?: boolean
}

// Thêm ID vào dữ liệu giả lập để dễ quản lý CRUD
const INITIAL_SHOWS: Show[] = [
  { id: "1", day: "15", month: "THG 11", city: "Hà Nội", venue: "Sân Vận Động Mỹ Đình" },
  { id: "2", day: "22", month: "THG 11", city: "Đà Nẵng", venue: "Cung Thể Thao Tiên Sơn" },
  { id: "3", day: "30", month: "THG 11", city: "Huế", venue: "Quảng Trường Ngọ Môn", soldOut: true },
  { id: "4", day: "07", month: "THG 12", city: "Nha Trang", venue: "Quảng Trường 2 Tháng 4" },
  { id: "5", day: "14", month: "THG 12", city: "TP. Hồ Chí Minh", venue: "Sân Vận Động Phú Thọ" },
  { id: "6", day: "21", month: "THG 12", city: "Cần Thơ", venue: "Nhà Thi Đấu Cần Thơ", soldOut: true },
]

export function TourList() {
  const [shows, setShows] = useState<Show[]>(INITIAL_SHOWS)
  const [isAdmin, setIsAdmin] = useState(false)

  // -- States cho Modal Mua Vé --
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false)
  const [selectedShow, setSelectedShow] = useState<Show | null>(null)
  const [ticketStatus, setTicketStatus] = useState<"idle" | "success">("idle")

  // -- States cho Modal Admin (Thêm/Sửa) --
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)
  const [editingShow, setEditingShow] = useState<Show | null>(null)

  // 1. Kiểm tra quyền Admin khi tải trang
  useEffect(() => {
    const checkAuth = () => {
      setIsAdmin(localStorage.getItem("isAdmin") === "true")
    }
    checkAuth()
    window.addEventListener("auth-change", checkAuth)
    return () => window.removeEventListener("auth-change", checkAuth)
  }, [])

  // Khóa cuộn màn hình khi mở bất kỳ modal nào
  useEffect(() => {
    if (isTicketModalOpen || isAdminModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isTicketModalOpen, isAdminModalOpen])

  // ==========================================
  // LOGIC ADMIN (THÊM / SỬA / XÓA)
  // ==========================================
  const handleOpenAdminAdd = () => {
    setEditingShow(null)
    setIsAdminModalOpen(true)
  }

  const handleOpenAdminEdit = (show: Show) => {
    setEditingShow(show)
    setIsAdminModalOpen(true)
  }

  const handleDeleteShow = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa lịch diễn này?")) {
      setShows(prev => prev.filter(s => s.id !== id))
    }
  }

  const handleAdminSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newShow: Show = {
      id: editingShow ? editingShow.id : Date.now().toString(),
      day: formData.get("day") as string,
      month: formData.get("month") as string,
      city: formData.get("city") as string,
      venue: formData.get("venue") as string,
      soldOut: formData.get("soldOut") === "true",
    }

    if (editingShow) {
      setShows(prev => prev.map(s => (s.id === newShow.id ? newShow : s)))
    } else {
      setShows(prev => [...prev, newShow])
    }
    setIsAdminModalOpen(false)
  }

  // ==========================================
  // LOGIC KHÁCH HÀNG (MUA VÉ)
  // ==========================================
  const handleOpenTicketModal = (show: Show) => {
    setSelectedShow(show)
    setTicketStatus("idle")
    setIsTicketModalOpen(true)
  }

  const handleConfirmPurchase = (e: React.FormEvent) => {
    e.preventDefault()
    // Giả lập API gọi thanh toán / lưu db
    setTicketStatus("success")
  }

  return (
    <section className="w-full bg-transparent py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        
        {/* Khối Glassmorphism */}
        <div className="rounded-3xl border border-white/40 bg-white/60 p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Header */}
          <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary drop-shadow-sm">Lưu Diễn 2026</span>
              <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl drop-shadow-sm">
                Lịch Diễn
              </h2>
            </div>
            
            {/* Nút Thêm mới dành cho Admin */}
            {isAdmin && (
              <button
                onClick={handleOpenAdminAdd}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary"
              >
                <Plus className="size-4" />
                Thêm Lịch Diễn
              </button>
            )}
          </div>

          {/* Danh Sách Lịch Diễn */}
          <ul className="border-t border-white/50">
            {shows.length === 0 ? (
              <li className="py-12 text-center font-mono text-sm text-slate-500">Chưa có lịch diễn nào được lên kế hoạch.</li>
            ) : (
              shows.map((show) => (
                <li
                  key={show.id}
                  className="group flex flex-col gap-4 border-b border-white/50 py-6 transition-colors hover:bg-white/40 sm:flex-row sm:items-center sm:gap-6 sm:px-4 sm:rounded-xl"
                >
                  {/* Ngày tháng */}
                  <div className="flex min-w-[4.5rem] flex-col items-start sm:items-center">
                    <span className="font-display text-4xl leading-none text-primary md:text-5xl">{show.day}</span>
                    <span className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-slate-600">
                      {show.month}
                    </span>
                  </div>

                  <div className="hidden h-12 w-px bg-white/60 sm:block" aria-hidden="true" />

                  {/* Địa điểm */}
                  <div className="flex-1">
                    <h3 className="text-balance text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl transition-colors group-hover:text-primary">
                      {show.city}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium leading-relaxed text-slate-700">
                      <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {show.venue}
                    </p>
                  </div>

                  {/* Nút Hành Động (CTA) */}
                  <div className="flex items-center gap-3 sm:ml-auto">
                    {/* Admin Tools */}
                    {isAdmin && (
                      <div className="flex items-center gap-2 mr-4 border-r border-white/50 pr-4">
                        <button onClick={() => handleOpenAdminEdit(show)} className="rounded-md p-2 text-slate-500 hover:bg-white hover:text-primary transition-colors">
                          <Pencil className="size-4" />
                        </button>
                        <button onClick={() => handleDeleteShow(show.id)} className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    )}

                    {/* Button Mua vé / Hết vé */}
                    {show.soldOut ? (
                      <button
                        type="button"
                        disabled
                        className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/50 bg-white/30 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-slate-500 sm:w-auto"
                      >
                        Hết Vé
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOpenTicketModal(show)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105 hover:bg-pink-600 sm:w-auto"
                      >
                        <Ticket className="size-4" aria-hidden="true" />
                        Mua Vé
                      </button>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* ==========================================
          MODAL: KHÁCH MUA VÉ
      ========================================== */}
      {isTicketModalOpen && selectedShow && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Nút Đóng */}
            <button
              onClick={() => setIsTicketModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-foreground transition-colors"
            >
              <X className="size-5" />
            </button>

            {ticketStatus === "idle" ? (
              <div className="p-8">
                <div className="mb-6 text-center">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                    Đăng Ký Mua Vé
                  </span>
                  <h3 className="mt-3 font-display text-2xl uppercase text-foreground">
                    Live in {selectedShow.city}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {selectedShow.day} {selectedShow.month} - {selectedShow.venue}
                  </p>
                </div>

                <form onSubmit={handleConfirmPurchase} className="flex flex-col gap-4">
                  <div>
                    <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Họ và tên</label>
                    <input required type="text" placeholder="Nguyễn Văn A" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Số điện thoại</label>
                    <input required type="tel" placeholder="0901234567" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Số lượng vé</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                      <option value="1">1 Vé</option>
                      <option value="2">2 Vé</option>
                      <option value="3">3 Vé</option>
                      <option value="4">4 Vé</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="mt-4 w-full rounded-xl bg-foreground px-4 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary">
                    Xác nhận đặt vé
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center p-10 text-center">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle className="size-8" />
                </div>
                <h3 className="font-display text-2xl uppercase text-foreground">Đặt vé thành công!</h3>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  Cảm ơn bạn. Thông tin thanh toán và nhận vé đã được gửi đến số điện thoại của bạn.
                </p>
                <button onClick={() => setIsTicketModalOpen(false)} className="mt-8 w-full rounded-xl bg-slate-100 px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:bg-slate-200">
                  Đóng cửa sổ
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: ADMIN THÊM/SỬA
      ========================================== */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-foreground transition-colors"
            >
              <X className="size-5" />
            </button>

            <h3 className="mb-6 font-display text-2xl uppercase text-foreground">
              {editingShow ? "Sửa Lịch Diễn" : "Thêm Lịch Diễn"}
            </h3>

            <form onSubmit={handleAdminSave} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Ngày (VD: 15)</label>
                  <input name="day" required defaultValue={editingShow?.day} type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Tháng (VD: THG 11)</label>
                  <input name="month" required defaultValue={editingShow?.month} type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              
              <div>
                <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Thành phố</label>
                <input name="city" required defaultValue={editingShow?.city} type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              
              <div>
                <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Địa điểm biểu diễn</label>
                <input name="venue" required defaultValue={editingShow?.venue} type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>

              <div>
                <label className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-700">Trạng thái vé</label>
                <select name="soldOut" defaultValue={editingShow?.soldOut ? "true" : "false"} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="false">Còn vé (Đang mở bán)</option>
                  <option value="true">Hết vé (Sold Out)</option>
                </select>
              </div>

              <button type="submit" className="mt-4 w-full rounded-xl bg-primary px-4 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-pink-600">
                Lưu Thông Tin
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}