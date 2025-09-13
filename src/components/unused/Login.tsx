// components/Login.tsx
'use client'
import { useEffect } from 'react'

export default function Login() {
  useEffect(() => {
    window.location.href = 'https://internship.aranish.uk/login'
  }, [])
  return null
}
