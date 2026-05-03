import type { Metadata } from 'next'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'Kyle Arahans Portfolio',
  description:
    'A portfolio showcasing my projects and get to learn about myself and the hands-on experience I learned as a developer.',
  keywords: [
    'Kyle Arahan',
    'Full Stack Developer',
    'Software Developer',
    'Mobile Developer',
    'React',
    'PostgreSQL',
    'Next.js',
    'Winnipeg Developer',
  ],
  authors: [{ name: 'Kyle Arahan' }],
  openGraph: {
    title: 'Kyle Arahan | Full Stack Web Developer',
    description:
      'Full Stack Web Developer based in Winnipeg, Manitoba, Canada.',
    url: 'https://yourportfolio.vercel.app',
    siteName: 'Kyle Arahan Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Arahan | Full Stack Web Developer',
    description:
      'Full Stack Web Developer based in Winnipeg, Manitoba, Canada.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}