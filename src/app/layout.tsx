import type { Metadata } from 'next'
import { Electrolize, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const electrolize = Electrolize({ 
  weight: '400',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Symphony Token Faucet',
  description: 'Claim your Symphony Tokens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`${electrolize.className} min-h-screen bg-gradient-to-br from-purple-900 to-blue-900`}>
        <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link 
                  href="https://fallenones.xyz" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}