// app/layout.tsx
import './globals.css'
import NavBar from '@/components/NavBar'
import MusicBar from '@/components/MusicBar'

export const metadata = {
  title: 'Portfolio | Abhinav Ranish',
  description: 'Software Engineer | Cybersecurity | AI/ML — Building secure, intelligent systems with speed, scale, and creativity.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 font-sans min-h-screen">
        <NavBar />
        <main className="pt-24">{children}</main>
        <MusicBar />
      </body>
    </html>
  )
}
