// app/spotify/page.tsx
'use client'
import { useEffect } from 'react'
export default function SpotifyRedirect() {
  useEffect(() => {
    window.location.href = 'https://spotify.aranish.uk'
  }, [])
  return null
}
