"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Giả lập xác thực (Hardcode tài khoản để test)
    // Trong thực tế, đoạn này sẽ gọi API lên Backend
    if (email === "admin@thesunsymphony.com" && password === "123456") {
      localStorage.setItem("isAdmin", "true") // Lưu trạng thái đăng nhập
      router.push("/admin") // Chuyển hướng vào trang quản trị
    } else {
      setError("Email hoặc mật khẩu không chính xác!")
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="size-6 text-primary" aria-hidden="true" />
          </div>
          <h1 className="font-display text-3xl uppercase tracking-tight text-foreground">
            Quản trị viên
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Đăng nhập để vào bảng điều khiển hệ thống
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="admin@thesunsymphony.com"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground" htmlFor="password">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-destructive">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-3 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </main>
  )
}