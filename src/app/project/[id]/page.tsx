'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return ''
}
