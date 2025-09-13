// app/page.tsx
import Home from '@/components/unused/Home'
import Resume from '@/components/Resume'
import GitHubSnippet from '@/components/unused/GitHubSnippet'
import Contact from '@/components/unused/Contact'
import AnimatedTitle from '@/components/IamSWE'
import VisitCounter from '@/components/View'
import MiniProject from '@/components/MiniProject'

// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <Home />
        </section>

        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <div className="mt-9 py-3 flex items-center justify-center">
            <AnimatedTitle />
          </div>
          <div className="mt-8">
            <GitHubSnippet />
          </div>
          <div className="mt-6 py-6 flex items-center justify-center gap-6">
            <MiniProject />
            <VisitCounter />
          </div>
        </section>

        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <Resume />
          <div className="mt-5" />
          <Contact />
        </section>
      </div>
    </main>
  )
}
