import { NextResponse } from 'next/server'
import { client, articlesQuery } from '@/lib/sanity'

export async function GET() {
  try {
    console.log('🔍 API Route: Fetching articles from Sanity...')
    const articles = await client.fetch(articlesQuery)
    console.log('✅ API Route: Found articles:', articles.length)
    
    return NextResponse.json(articles)
  } catch (error) {
    console.error('❌ API Route: Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}