import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Open Letter', value: 'open-letter' },
          { title: 'Statement', value: 'statement' },
          { title: 'Position Paper', value: 'position-paper' },
          { title: 'News', value: 'news' },
          { title: 'Announcement', value: 'announcement' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200)
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Featured articles appear in the Latest Updates section on the homepage'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (0, 1, 2, etc.)'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      publishedAt: 'publishedAt',
      featured: 'featured'
    },
    prepare(selection) {
      const { title, category, publishedAt, featured } = selection
      const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${category} • ${formattedDate} ${featured ? '• Featured' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ]
})