import StatusTitle from '@/shared/status-title'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
  return (
    <>
      <div className='flex justify-between items-center pt-8'>
        <div className='flex gap-4 items-center'>
          <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#2F2F2F]'>
            <Image src='/logo.png' alt='logo' width={32} height={32} />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-white'>Mulyana</p>
            <StatusTitle
              status='DEFAULT'
              size='NORMAL'
              text='Available for work'
            />
          </div>
        </div>
        <Link href='/' className='flex gap-2'>
          <Image
            src='/icon/cv.svg'
            width={17}
            height={17}
            alt='resume'
            className='rotate-[15deg] hover:rotate-0'
          />
          <span className='text-white/80 hover:text-white'>Resume</span>
        </Link>
      </div>
      <div className='mt-14'>
        <p className='max-w-[460px] text-xl text-white/60'>
          <span className='text-white'>Junior Software Engineer</span> based in
          Indonesia and final year student at Ahmad Dahlan University
        </p>
      </div>
    </>
  )
}
