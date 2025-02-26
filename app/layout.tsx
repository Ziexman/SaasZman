"use client"
import "./globals.css";
import Layout from "./src/components/Layout"; 
import { ThemeProvider } from "./src/components/themeContext";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation"; // Use `usePathname` for Next.js 13+ instead of `useRouter`

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname(); // Get current page path

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Layout>
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname} // Animate when route changes
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                style={{ minHeight: "100vh" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
