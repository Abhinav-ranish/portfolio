import { NextRequest } from 'next/server'

const namespaceId = process.env.CLOUDFLARE_KV_NAMESPACE_ID!
const accountId = process.env.CLOUDFLARE_KV_ACCOUNT_ID!
const token = process.env.CLOUDFLARE_KV_API_TOKEN!
const key = 'total_visits'

export async function GET(req: NextRequest) {
  const base = `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`

  const current = await fetch(base, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.ok ? res.text() : '0')

  const newCount = (parseInt(current || '0') || 0) + 1

  await fetch(base, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/plain',
    },
    body: newCount.toString(),
  })

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="30">
    <rect width="130" height="30" fill="#1e1e1e" rx="4"/>
    <text x="10" y="20" fill="#ffffff" font-family="monospace" font-size="14">
      Visits: ${newCount}
    </text>
  </svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-store',
    },
  })
}
