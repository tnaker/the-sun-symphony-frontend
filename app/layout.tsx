import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import { HeroBanner } from '@/components/hero-banner'
import Link from 'next/link'
import  HologramBackground  from '@/components/hologram-background'
import { SiteHeader } from '@/components/site-header'

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
        <SiteHeader />
        <HologramBackground />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* Global audio player is sticky at the bottom of the viewport, so we render it here in the root layout so it is always present */}
        {/* <GlobalAudioPlayer /> */}
      </body>
    </html>
  )
}
