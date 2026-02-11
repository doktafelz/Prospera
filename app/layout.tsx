import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ClientLayout from "./client-layout"

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prospera Finance Limited - Building Your Prosperity",
  description:
    "Fast, reliable, and transparent financial solutions. Loans, investments, and asset financing for individuals and businesses.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${GeistMono.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}
