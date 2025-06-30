// app/page.tsx
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import GitHubSnippet from '@/components/GitHubSnippet'
import Contact from '@/components/Contact'
import AnimatedTitle from '@/components/IamSWE'
import VisitCounter from '@/components/View'
import MiniProject from '@/components/MiniProject'

export default function HomePage() {
  return (
    <>
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <Resume />
          <div className="mt-5 py-8">
            <AnimatedTitle />
          </div>
          <div className="mt-5 py-1">
            <MiniProject />
          </div>
          <div className="mt-5 py-2">
            <VisitCounter />
          </div>

        </section>
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <Home />
        </section>
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <Contact />
          <div className="mt-5">
            <GitHubSnippet />
          </div>
        </section>
      </div>

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
    </>
  )
}
