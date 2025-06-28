// components/ASU.tsx
'use client'
import { useEffect } from 'react'

export default function ASU() {
  useEffect(() => {
    const tab = window.open('https://search.asu.edu/profile/4295566', '_blank', 'noopener,noreferrer')
    if (tab) tab.opener = null
  }, [])
  return <p className="pt-24 text-center text-gray-100">Redirecting to ASU Profile...</p>
}
