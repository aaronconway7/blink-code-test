import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

// https://vercel.com/guides/loading-static-file-nextjs-api-route
export async function GET() {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(
    jsonDirectory + '/conversations.json',
    'utf8'
  )
  const obj = JSON.parse(fileContents)

  return NextResponse.json(obj)
}
