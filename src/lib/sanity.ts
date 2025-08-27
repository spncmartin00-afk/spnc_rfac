import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN for production
})

// GROQ queries for articles
export const articlesQuery = `
  *[_type == "article" && featured == true] | order(order asc, publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    featured,
    order
  }
`

export const allArticlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    featured,
    order
  }
`

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    content,
    publishedAt,
    featured,
    order
  }
`