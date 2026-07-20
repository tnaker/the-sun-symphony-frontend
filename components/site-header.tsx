"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, LogOut } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    const checkAuth = () => {
      setIsAdmin(localStorage.getItem("isAdmin") === "true")
    }
    
    // Chạy lần đầu khi load component
    checkAuth()

    // Lắng nghe sự kiện login/logout để cập nhật menu ngay lập tức
    window.addEventListener("auth-change", checkAuth)
    return () => window.removeEventListener("auth-change", checkAuth)
  }, [])

  // Tự động đóng menu trên mobile khi chuyển trang
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Khóa cuộn trang khi mở menu mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    window.dispatchEvent(new Event("auth-change")) // Báo hiệu đã đăng xuất
    router.push("/login")
  }

  // Cấu hình menu động tùy theo trạng thái đăng nhập
  const baseLinks = [
    { name: "Trang Chủ", href: "/" },
    { name: "Về Tôi", href: "/artist" },
    { name: "Khoảnh Khắc", href: "/careers" },
    { name: "Âm Nhạc", href: "/video" },
    { name: "Lịch Diễn", href: "/tour" },
    { name: "Liên Hệ", href: "/contact" },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-5 md:px-8">
      {/* Logo / Tên Trang */}
      <Link 
        href="/" 
        className="relative z-[60] font-display text-xl font-bold uppercase tracking-widest text-foreground drop-shadow-sm"
      >
        Trang Chủ <span className="text-primary">.</span>
      </Link>

      {/* --- MENU DESKTOP --- */}
      <nav className="hidden items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest text-slate-800 md:flex">
        {baseLinks.filter(link => link.name !== "Trang Chủ").map((link) => (
          <Link key={link.name} href={link.href} className="transition-colors hover:text-primary">
            {link.name}
          </Link>
        ))}
        
        {isAdmin ? (
          <>
            <Link href="/admin" className="text-primary transition-colors hover:text-foreground">
              Admin
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-1 transition-colors hover:text-red-600">
              <LogOut className="size-3" /> Đăng Xuất
            </button>
          </>
        ) : (
          <Link href="/login" className="transition-colors hover:text-primary">
            Đăng Nhập
          </Link>
        )}
      </nav>

      {/* --- NÚT HAMBURGER (CHỈ HIỆN TRÊN MOBILE) --- */}
      <button
        className="relative z-[60] p-2 text-foreground md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Thanh điều hướng"
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </button>

      {/* --- MENU MOBILE (OVERLAY KÍNH MỜ) --- */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {baseLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-display text-4xl uppercase tracking-widest text-foreground transition-colors hover:text-primary active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="my-2 h-[1px] w-12 bg-slate-200"></div>

          {isAdmin ? (
            <>
              <Link href="/admin" className="font-display text-4xl uppercase tracking-widest text-primary transition-colors hover:text-foreground">
                Admin Panel
              </Link>
              <button onClick={handleLogout} className="font-display text-2xl uppercase tracking-widest text-slate-500 transition-colors hover:text-red-600">
                Đăng Xuất
              </button>
            </>
          ) : (
            <Link href="/login" className="font-display text-4xl uppercase tracking-widest text-foreground transition-colors hover:text-primary">
              Đăng Nhập
            </Link>
          )}
        </nav>
        
        {/* Điểm nhấn nhỏ ở dưới cùng Menu Mobile */}
        <div className="absolute bottom-12 font-mono text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-500">
          LANY S. Official
        </div>
      </div>
    </header>
  )
}