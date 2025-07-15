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
          <Home />
        </section>
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          <div className="mt-9 py-3 flex items-center justify-center">
            <AnimatedTitle />
          </div>
          <div className="mt-8 ">
            <GitHubSnippet />
          </div>
          <div className="mt-6 py-6 flex items-center space-x-15 justify-center">
            <MiniProject />

            <VisitCounter />
          </div>

        </section>
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
          
                      <Resume />

          <div className="mt-5">
          </div>
          <Contact />
        </section>
      </div>


    </>
  )
}
