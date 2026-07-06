import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
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
        <header className="border-b border-border p-4"> 
          <nav className="flex gap-6">
            <Link href= "/"> Trang chủ </Link>
            <Link href= "/tour"> Tour diễn </Link>
            <Link href= "/admin"> Admin </Link>
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
