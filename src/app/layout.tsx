import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mulyana • Software Engineer',
  description: 'Mulyana, software engineer spesialize in frontend development',
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
