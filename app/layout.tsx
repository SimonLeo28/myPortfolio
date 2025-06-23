import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simon Leo Alexander',
  description: 'Full Stack Developer',
  generator: 'Simon Leo Alexander',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
