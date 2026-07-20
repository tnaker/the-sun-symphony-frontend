"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false) // Thêm trạng thái loading

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    try {
      // Gọi xuống Backend API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Nếu API báo thành công
        localStorage.setItem("isAdmin", "true") // Lưu trạng thái
        window.dispatchEvent(new Event("auth-change")) // Báo hiệu cho các component khác cập nhật
        router.push("/admin")
      } else {
        // Nếu sai mật khẩu hoặc lỗi
        setError(data.error)
      }
    } catch (err) {
      setError("Lỗi kết nối máy chủ, vui lòng thử lại!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-transparent px-4">
      {/* Tối ưu một chút UI theo phong cách Kính mờ (Glassmorphism) của bạn */}
      <div className="w-full max-w-md rounded-[2rem] border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 shadow-inner">
            <Lock className="size-6 text-primary" aria-hidden="true" />
          </div>
          <h1 className="font-display text-3xl uppercase tracking-tight text-foreground">
            Quản trị viên
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-700">
            Đăng nhập để vào bảng điều khiển hệ thống
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="font-mono text-xs font-bold uppercase tracking-widest text-foreground" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/50 bg-white/50 px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="admin@thesunsymphony.com"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs font-bold uppercase tracking-widest text-foreground" htmlFor="password">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/50 bg-white/50 px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-600 border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary disabled:opacity-70"
          >
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
          </button>
        </form>
      </div>
    </main>
  )
}