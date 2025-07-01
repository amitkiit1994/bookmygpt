import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookMyGPT - Join the Waitlist',
  description: 'Be the first to rent or share personalized GPTs — from resume coaches to legal advisors.',
  keywords: 'AI, GPT, rental, marketplace, artificial intelligence',
  authors: [{ name: 'BookMyGPT Team' }],
  openGraph: {
    title: 'BookMyGPT - Join the Waitlist',
    description: 'Be the first to rent or share personalized GPTs — from resume coaches to legal advisors.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookMyGPT - Join the Waitlist',
    description: 'Be the first to rent or share personalized GPTs — from resume coaches to legal advisors.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
} 