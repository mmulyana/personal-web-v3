'use client'

import { projects } from '@/data/data-projects'
import { Project } from '@/model/model-project'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [showModal, setShowModal] = useState<boolean>(true)
  const [detail, setDetail] = useState<Project | null>(null)

  function backToHome() {
    setShowModal(false)
    window.history.back()
  }

  useEffect(() => {
    if (!showModal) return
    const detail = projects.filter(
      (project) => project.id === parseInt(params.id)
    )
    setDetail(detail[0])
  }, [params])

  if (showModal) {
    return (
      <div className='w-full h-full fixed top-0 left-0'>
        <div
          className='absolute top-0 left-0 w-full h-full bg-[#222222]/80'
          onClick={backToHome}
        />
        <div className='h-full md:h-fit max-w-3xl mx-auto mt-0 md:mt-10 bg-[#3E3E3E] rounded-none md:rounded-2xl z-10 relative overflow-hidden'>
          <button
            className='h-10 w-10 rounded-full bg-[#2D2D2D] flex justify-center items-center text-sm text-white/60 absolute top-4 right-4'
            onClick={backToHome}
          >
            X
          </button>
          <Image
            src={'/projects/' + detail?.image}
            width={900}
            height={440}
            alt='alt'
            className='rounded-t-xl w-full h-[320px] object-cover object-left-top'
          />
          <div className='px-5 pb-5 pt-4'>
            <p className='text-xl text-white'>{detail?.name}</p>
            <p className='text-white/80 mt-2'>{detail?.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
