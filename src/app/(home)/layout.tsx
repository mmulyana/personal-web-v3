import Footer from '@/shared/footer'

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <main className='container mx-auto max-w-[960px] px-4'>
      {children}
      <Footer />
    </main>
  )
}
