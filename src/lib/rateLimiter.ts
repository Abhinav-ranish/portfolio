// lib/rateLimiter.ts
type RateLimitStore = Record<string, number[]>

const store: RateLimitStore = {}
const MAX_REQUESTS = 5
const WINDOW_MS = 60_000 // 1 minute

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  if (!store[ip]) store[ip] = []

  // Purge old timestamps
  store[ip] = store[ip].filter((timestamp) => now - timestamp < WINDOW_MS)

  if (store[ip].length >= MAX_REQUESTS) {
    return true
  }

  store[ip].push(now)
  return false
}
