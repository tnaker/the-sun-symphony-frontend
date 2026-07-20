import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import { HeroBanner } from '@/components/hero-banner'
import Link from 'next/link'
import  HologramBackground  from '@/components/hologram-background'

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
  title: 'LANY S — Portfolio & Showcase',
  description:
    'Trang showcase chính thức của LANY S. Khám phá tiểu sử, các dự án âm nhạc và những khoảnh khắc biểu diễn.',
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
    <html lang="en" className={`${inter.variable} ${anton.variable} `}>
      <body className="font-sans antialiased">
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-5 md:px-8">
          <Link href="/" className="font-display text-xl font-semibold tracking-[0.15em] uppercase tracking-widest text-foreground">
            Trang Chủ <span className="text-primary">.</span>
          </Link>
          <nav className="hidden items-center gap-10 font-mono text-sm font-semibold uppercase tracking-widest text-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)] md:flex">
                        {/* Thêm link Nghệ Sĩ */}
            <Link href="/artist" className="transition-all duration-300
hover:text-primary
hover:tracking-[0.18em]">
              Về Tôi
            </Link>
            <Link href="/careers" className="transition-all duration-300
hover:text-primary
hover:tracking-[0.18em]">
              Khoảnh Khắc
            </Link>
            <Link href="/video" className="transition-all duration-300
hover:text-primary
hover:tracking-[0.18em]">
              Âm Nhạc
            </Link>
            <Link href="/tour" className="transition-all duration-300
hover:text-primary
hover:tracking-[0.18em]">
              Lịch Diễn
            </Link>


            {/* Thêm link Admin */}
            {/* <Link href="/admin" className="transition-colors hover:text-foreground">
              Admin
            </Link> */}
            <Link href="/contact" className="transition-all duration-300
hover:text-primary
hover:tracking-[0.18em]">
              Liên Hệ
            </Link>
            <Link href="/login" className="transition-all duration-300
hover:text-primary
hover:tracking-[0.18em]">
              Đăng Nhập
            </Link>
          </nav>
        </header>
        <HologramBackground />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* Global audio player is sticky at the bottom of the viewport, so we render it here in the root layout so it is always present */}
        {/* <GlobalAudioPlayer /> */}
      </body>
    </html>
  )
}
