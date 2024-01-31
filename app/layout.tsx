import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import ToastProvider from '@/provider/ToastProvider'
import ClientOnly from '@/components/ClientOnly'

import { siteConfig } from '@/config/site'


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth overflow-y-scroll no-scrollbar",
          fontSans.variable
        )}>
        <ClientOnly>
          <ToastProvider />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
