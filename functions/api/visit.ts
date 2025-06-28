/// <reference types="@cloudflare/workers-types" />
export async function onRequest(context: {
  env: { VISIT_KV: KVNamespace }
}): Promise<Response> {
    const kv = context.env.VISIT_KV
  const key = 'total_visits'

  const value = await kv.get(key)
  const newCount = (parseInt(value || '0') || 0) + 1

  await kv.put(key, newCount.toString())

  return new Response(JSON.stringify({ count: newCount }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
