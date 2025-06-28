// components/MusicPage.tsx
'use client'
import { useEffect } from 'react'

export default function MusicPage() {
  useEffect(() => {
    window.location.href = 'https://music.aranish.uk'
  }, [])
  return null
}
