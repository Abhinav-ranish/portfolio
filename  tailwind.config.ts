// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config = {
  // 1. Tell Tailwind where to look for class names
  content: [
    './app/**/*.{ts,tsx}',      // Next.js app dir
    './components/**/*.{ts,tsx}' // Shared UI components
  ],
  theme: {
    extend: {
      // your custom colors/fonts/etc
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config
