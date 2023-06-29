import './globals.css'

import { Outfit } from 'next/font/google';

export const metadata = {
  title: 'Daniel Amirtharaj',
  description: 'I am a junior at Santa Clara University pursuing a B.S. in Computer Science and Engineering. I have experience with several programming languages and frameworks. In my free time, I enjoy weightlifting, hiking, and wrestling.',
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