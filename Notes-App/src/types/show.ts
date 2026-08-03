export type Show = {
  id: number
  name: string
  summary: string | null
  image: {
    medium: string
    original: string
  } | null
  rating: {
    average: number | null
  }
  premiered: string | null
  genres: string[]
}

export type SearchResult = {
  score: number
  show: Show
}
