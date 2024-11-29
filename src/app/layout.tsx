import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { ThemeProvider } from '../component/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rudendru Rahul',
  description: 'About rudendru rahul exprience and skills and profectional details.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

