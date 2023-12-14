import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

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
      <Head>
        <link rel='icon' href='/m.ico' />
      </Head>
      <body>
        {children}
        {modal}
      </body>
    </html>
  )
}
