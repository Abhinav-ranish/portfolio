/// <reference types="@cloudflare/workers-types" />
export async function onRequest(context: {
  env: { KV_BINDING: KVNamespace }
}): Promise<Response> {
    const kv = context.env.KV_BINDING
  const key = 'total_visits'

  const value = await kv.get(key)
  const newCount = (parseInt(value || '0') || 0) + 1

  await kv.put(key, newCount.toString())

  return new Response(JSON.stringify({ count: newCount }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
