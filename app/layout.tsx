import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Muslim Atlas - Find Masjids, Halal Food & Muslim Businesses",
    template: "%s | Muslim Atlas"
  },
  description: "Find masjids, halal food, and Muslim-friendly businesses in your city or while you travel. A clean, modern directory for the global Muslim community.",
  keywords: ["muslim", "masjid", "halal", "halal food", "muslim business", "prayer space", "islamic", "mosque"],
  authors: [{ name: "Muslim Atlas" }],
  creator: "Muslim Atlas",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muslim Atlas",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
