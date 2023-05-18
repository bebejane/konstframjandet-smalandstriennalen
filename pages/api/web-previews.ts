import { NextRequest, NextResponse } from "next/server";
import cors from '/lib/cors'

export const config = {
  runtime: 'edge',
}

export function withWebPreviews(generatePreviewUrl: (record: any) => Promise<string>): (req: NextRequest, res: NextResponse) => void {

  return async (req: NextRequest, res: NextResponse) => {

    if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.SITE_URL)
      throw new Error('NEXT_PUBLIC_SITE_URL is not set in .env')

    if (!req.body)
      throw new Error('No body found in request')

    const payload = await req.json()
    const path = await generatePreviewUrl(payload);
    const previewLinks = []
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
    console.log(process.env.NEXT_PUBLIC_SITE_URL)

    if (path) {
      previewLinks.push({ label: 'Live', url: `${baseUrl}${path}` })
      const item = payload.get('item') as any
      console.log(item)
      if (process.env.DATOCMS_PREVIEW_SECRET && item?.meta?.status !== 'published')
        previewLinks.push({ label: 'Preview', url: `${baseUrl}/api/preview?slug=${path}&secret=${process.env.DATOCMS_PREVIEW_SECRET}` })
    }

    return cors(
      req,
      new Response(JSON.stringify({ previewLinks }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
      {
        origin: '*',
        methods: ['POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: true,
      }
    )
  }
}

export default withWebPreviews(async ({ item, itemType }) => {

  let path = null;

  const { api_key } = itemType.attributes
  const slug = typeof item.attributes.slug === 'object' ? item.attributes.slug.sv : item.attributes.slug

  switch (api_key) {
    case 'start':
      path = `/`
      break;
    case 'about':
      path = `/om/${slug}`
      break;
    case 'program':
      path = `/program/${slug}`
      break;
    case 'participant':
      path = `/medverkande/${slug}`
      break;
    case 'news':
      path = `/nyheter/${slug}`
      break;
    case 'location':
      path = `/platser/${slug}`
      break;
    case 'exhibition':
      path = `/utstallningar-och-projekt/${slug}`
      break;
    case 'exhibition':
      path = `/utstallningar-och-projekt/${slug}`
      break;
    case 'partner':
      path = `/partners/${slug}`
      break;
    case 'contact':
      path = `/kontakt`
      break;
    default:
      break;
  }

  return path
})