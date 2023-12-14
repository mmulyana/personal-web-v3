type Props = {
  children: React.ReactNode
  detail: React.ReactNode
}
export default function HomeLayout({ children }: Props) {
  return (
    <main className='container mx-auto max-w-[960px] px-4 pb-10'>
      {children}
    </main>
  )
}
