// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-24 text-center">
      <h1 className="text-4xl font-bold text-gray-100">Page Not Found</h1>
      <p className="mt-4 text-gray-300">
        Sorry, we couldn’t find that page.
      </p>
      <Link href="/" className="mt-6 inline-block text-green-500 hover:text-green-400">
        ← Back to Home
      </Link>
    </div>
  )
}
