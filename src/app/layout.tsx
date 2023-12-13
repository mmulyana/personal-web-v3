import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mulyana Junior Software Engineer',
  description:
    'Mulyana, Junior software engineer spesialize in frontend development',
}

type Props = {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang='en'>
      <body>
        {children}
        {modal}
      </body>
    </html>
  )
}
