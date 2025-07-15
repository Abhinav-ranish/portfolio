// app/api/visit/badge-redirect/route.ts
import { NextResponse } from 'next/server'

export function GET() {
  const ts = Date.now()
  return NextResponse.redirect(`https://aranish.uk/api/visit/badge?t=${ts}`)
}
