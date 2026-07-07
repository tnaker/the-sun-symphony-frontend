import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import { HeroBanner } from '@/components/hero-banner'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'THE SUN SYMPHONY — Sống Động. Mạnh Mẽ. Chân Thực.',
  description:
    'Trang showcase chính thức của The Sun Symphony. Nghe ca khúc mới nhất, khám phá dàn thiết bị live và cảm nhận không khí concert.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0a09',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} bg-background`}>
      <body className="font-sans antialiased">
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-5 md:px-8">
          <Link href="/" className="font-display text-lg uppercase tracking-widest text-foreground">
            Trang Chủ <span className="text-primary">.</span>
          </Link>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <Link href="/instrument" className="transition-colors hover:text-foreground">
              Nhạc Cụ
            </Link>
            <Link href="/tour" className="transition-colors hover:text-foreground">
              Lịch Diễn
            </Link>
            <Link href="/video" className="transition-colors hover:text-foreground">
              Khoảnh Khắc
            </Link>
            {/* Thêm link Nghệ Sĩ */}
            <Link href="/artist" className="transition-colors hover:text-foreground">
              Nghệ Sĩ
            </Link>
            {/* Thêm link Admin */}
            {/* <Link href="/admin" className="transition-colors hover:text-foreground">
              Admin
            </Link> */}
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Liên Hệ
            </Link>
            <Link href="/login" className="transition-colors hover:text-foreground">
              Đăng Nhập
            </Link>
          </nav>
        </header>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* Global audio player is sticky at the bottom of the viewport, so we render it here in the root layout so it is always present */}
        <GlobalAudioPlayer />
      </body>
    </html>
  )
}
