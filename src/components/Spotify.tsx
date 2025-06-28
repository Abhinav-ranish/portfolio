// components/Spotify.tsx
'use client'
import { useEffect } from 'react'

export default function Spotify() {
  useEffect(() => {
    window.location.href = 'https://spotify.aranish.uk'
  }, [])
  return null
}
