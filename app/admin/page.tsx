"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { TracksTable } from "@/components/tracks-table"
import { LogOut } from "lucide-react"

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Kiểm tra cờ "isAdmin" trong LocalStorage
    const authStatus = localStorage.getItem("isAdmin")
    
    if (authStatus !== "true") {
      // Bị "đá" về trang đăng nhập nếu chưa có quyền
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    // 1. Xóa trạng thái đăng nhập
    localStorage.removeItem("isAdmin")
    
    // 2. Báo hiệu cho SiteHeader cập nhật lại menu (Ẩn menu Admin)
    window.dispatchEvent(new Event("auth-change"))
    
    // 3. Chuyển hướng về trang đăng nhập
    router.push("/login")
  }

  // Tránh lỗi chớp màn hình Admin (Flash of unauthenticated content) trước khi bị redirect
  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-background pt-24 pb-32 px-4 md:px-8">
       <div className="mx-auto mb-6 flex max-w-7xl items-center justify-end">
         <button 
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
         >
           <LogOut className="size-4" />
           Đăng xuất
         </button>
       </div>
       <div className="mx-auto max-w-7xl">
          <TracksTable />
       </div>
    </main>
  )
}