'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [showModal, setShowModal] = useState<boolean>(true)

  function backToHome() {
    setShowModal(false)
    window.history.back()
  }

  if (showModal) {
    return (
      <div className='w-full h-full fixed top-0 left-0'>
        <div
          className='absolute top-0 left-0 w-full h-full bg-[#222222]/80'
          onClick={backToHome}
        />
        <div className='h-40 max-w-3xl mx-auto mt-10 bg-[#3E3E3E] rounded-2xl z-10 relative p-5'>
          <p className='text-xl'>{params.id}</p>
        </div>
      </div>
    )
  }
}
