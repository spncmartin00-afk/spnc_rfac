export interface Article {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  excerpt: string
  publishedAt: string
  featured?: boolean
  order?: number
}

export const getCategoryColor = (category: string): { bg: string; text: string; button: string; buttonHover: string } => {
  switch (category) {
    case 'open-letter':
      return {
        bg: 'bg-fuchsia-100',
        text: 'text-fuchsia-600',
        button: 'bg-fuchsia-600',
        buttonHover: 'hover:bg-fuchsia-700'
      }
    case 'statement':
      return {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700'
      }
    case 'position-paper':
      return {
        bg: 'bg-emerald-100',
        text: 'text-emerald-600',
        button: 'bg-emerald-600',
        buttonHover: 'hover:bg-emerald-700'
      }
    case 'news':
      return {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        button: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-700'
      }
    case 'announcement':
      return {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        button: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700'
      }
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        button: 'bg-gray-600',
        buttonHover: 'hover:bg-gray-700'
      }
  }
}

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'open-letter':
      return 'Open Letter'
    case 'position-paper':
      return 'Position Paper'
    default:
      return category.charAt(0).toUpperCase() + category.slice(1)
  }
}