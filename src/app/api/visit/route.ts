// app/api/visit/route.ts
import { NextResponse } from 'next/server'

const namespaceId = process.env.CLOUDFLARE_KV_NAMESPACE_ID!
const accountId = process.env.CLOUDFLARE_KV_ACCOUNT_ID!
const token = process.env.CLOUDFLARE_KV_API_TOKEN!

const key = 'total_visits'

export async function GET() {
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

  return NextResponse.json({ count: newCount })
}
