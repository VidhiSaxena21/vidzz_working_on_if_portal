"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { useAuthStore } from "@/lib/store/auth"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <main className="min-h-screen">
        {children}
      </main>
    </ThemeProvider>
  )
}
