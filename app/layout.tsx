import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Inter } from "next/font/google"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://uniquerefrigerationservice.com"),
  title: {
    // Ye tab dikhega jab kisi page par title bhool gaye ho
    default: "Unique Refrigeration | Best AC & Fridge Repair in Bareilly",
    // Ye template har page ke title ko automatic format karega
    template: "%s | Unique Refrigeration Bareilly",
  },
  description: `Expert AC and Refrigerator repair services in Bareilly. Call ${COMPANY.phone} for professional 30-minute doorstep service.`,
  keywords: [
    "AC Service Bareilly",
    "AC Repair Bareilly",
    "Fridge Repair Bareilly",
    "Best AC Mechanic Bareilly",
    "Unique Refrigeration Bareilly",
  ],
  // SEO Bots ke liye
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}