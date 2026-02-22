import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { TooltipProvider } from '@/components/ui/tooltip'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js 모던 웹 스타터 킷',
  description: 'Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui로 구축된 프로덕션 준비 완료 스타터',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Starter Kit'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <TooltipProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
