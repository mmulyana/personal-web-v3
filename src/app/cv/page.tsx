'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const router = useRouter()

  useEffect(
    () =>
      router.push(
        'https://firebasestorage.googleapis.com/v0/b/olympus-17301.appspot.com/o/resume.pdf?alt=media&'
      ),
    []
  )
  return null
}
