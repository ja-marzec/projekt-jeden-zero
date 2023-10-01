import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '01010000 01010010 01001111 01001010 01000101 01001011 01010100 00100000 01011010 01000101 01010010 01001111 00100000 01001010 01000101 01000100 01000101 01001110',
  description: '01010000 01010010 01001111 01001010 01000101 01001011 01010100 00100000 01011010 01000101 01010010 01001111 00100000 01001010 01000101 01000100 01000101 01001110',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
