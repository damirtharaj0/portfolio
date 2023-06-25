import './globals.css'

import { Outfit } from 'next/font/google';

export const metadata = {
  title: 'Daniel Amirtharaj',
  description: 'Portfolio',
}

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}