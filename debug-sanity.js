import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '8n60tecr',
  dataset: 'articles',
  apiVersion: '2024-01-01',
  useCdn: false,
})

console.log('🔍 Debugging Sanity...')

try {
  // Check current state
  const allDocs = await client.fetch('*')
  console.log('📊 Current documents in dataset:', allDocs.length)
  
  // Try creating a test article via API
  console.log('🔧 Creating a test article...')
  const testArticle = await client.create({
    _type: 'article',
    title: 'Test Article from API',
    slug: {
      _type: 'slug',
      current: 'test-article-from-api'
    },
    category: 'news',
    excerpt: 'This is a test article created via the Sanity API',
    publishedAt: new Date().toISOString(),
    featured: true,
    order: 0
  })
  
  console.log('✅ Created test article:', testArticle._id)
  
  // Check if it appears now
  const articlesAfter = await client.fetch('*[_type == "article"]')
  console.log('📝 Articles after creation:', articlesAfter.length)
  
} catch (error) {
  console.error('❌ Error:', error.message)
  console.error('❌ Full error:', error)
}