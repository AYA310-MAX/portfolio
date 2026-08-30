import type { Metadata } from 'next'
import { Cinzel, Spectral, Space_Grotesk } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const spectral = Spectral({
  variable: '--font-spectral',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Dusk to Dawn — Walk with me',
  description: "Ayanda Dlamini's portfolio, told as a journey.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${spectral.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
