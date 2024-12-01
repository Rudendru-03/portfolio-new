import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { ThemeProvider } from '../component/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rudendru Rahul - Full Stack Developer Portfolio',
  description: 'Explore the portfolio of Rudendru Rahul, a skilled full stack developer specializing in React, Next.js, and modern web technologies. View projects, skills, and contact information.',
  keywords: ['Rudendru Rahul', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Rudendru Rahul' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rudendrurahul.com',
    title: 'Rudendru Rahul - Full Stack Developer Portfolio',
    description: 'Explore the portfolio of Rudendru Rahul, a skilled full stack developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: 'https://www.rudendrurahul.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rudendru Rahul Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudendru Rahul - Full Stack Developer Portfolio',
    description: 'Explore the portfolio of Rudendru Rahul, a skilled full stack developer specializing in React, Next.js, and modern web technologies.',
    images: ['https://www.rudendrurahul.com/twitter-image.jpg'],
    creator: '@rudendrurahul',
  },
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

