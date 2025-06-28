// components/Github.tsx
'use client'
import { useEffect } from 'react'

export default function Github() {
  useEffect(() => {
    window.location.href = 'https://github.com/abhinav-ranish'
  }, [])
  return null
}
