// app/page.jsx
import Home from '../components/Home';
import Resume from '../components/Resume';
import GitHubSnippet from '../components/GitHubSnippet';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-5">
      <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
        <Home />
      </section>
      <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
        <Resume />
        <div className="mt-5"><GitHubSnippet /></div>
      </section>
      <section className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
        <Contact />
      </section>
    </div>
  );
}
