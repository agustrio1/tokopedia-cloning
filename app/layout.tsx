import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import BottomBar from './components/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tokopedia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <AuthProvider>
          <Header />
          {children}
          <BottomBar />
        </AuthProvider>
      </body>
    </html>
  )
}