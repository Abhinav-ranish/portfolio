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
        <footer className="mt-25 w-full border-t border-gray-700 bg-gray-900 px-6 py-4 text-gray-400 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Branding */}
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Abhinav Ranish</span>. Built with ❤️ and TypeScript.
            </p>

            {/* Links */}
            <div className="flex gap-6 text-center">
              <a
                href="https://github.com/abhinav-ranish"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abhinavranish"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:presidentofjoy@asu.edu"
                className="hover:text-pink-200 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
        </body>
      </html>
    )
  }
