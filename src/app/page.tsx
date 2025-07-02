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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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

      
    </>
  )
}
