"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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

  const NAV_LINKS = [
    { name: "Trang Chủ", href: "/" },
    { name: "Về Tôi", href: "/artist" },
    { name: "Khoảnh Khắc", href: "/careers" },
    { name: "Âm Nhạc", href: "/video" },
    { name: "Lịch Diễn", href: "/tour" },
    { name: "Liên Hệ", href: "/contact" },
    { name: "Đăng Nhập", href: "/login" },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-5 md:px-8">
      {/* Logo / Tên Trang */}
      <Link 
        href="/" 
        className="relative z-[60] font-display text-xl font-bold uppercase tracking-widest text-slate-900 drop-shadow-sm"
      >
        Trang Chủ <span className="text-primary">.</span>
      </Link>

      {/* --- MENU DESKTOP --- */}
      <nav className="hidden items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest text-slate-800 md:flex">
        {NAV_LINKS.filter(link => link.name !== "Trang Chủ").map((link) => (
          <Link key={link.name} href={link.href} className="transition-colors hover:text-primary">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* --- NÚT HAMBURGER (CHỈ HIỆN TRÊN MOBILE) --- */}
      <button
        className="relative z-[60] p-2 text-slate-900 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Thanh điều hướng"
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </button>

      {/* --- MENU MOBILE (OVERLAY KÍNH MỜ) --- */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-display text-4xl uppercase tracking-widest text-slate-900 transition-colors hover:text-primary active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Điểm nhấn nhỏ ở dưới cùng Menu Mobile */}
        <div className="absolute bottom-12 font-mono text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-500">
          LANY S. Official
        </div>
      </div>
    </header>
  )
}