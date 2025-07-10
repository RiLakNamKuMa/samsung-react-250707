import { create } from 'zustand'
import { combine } from 'zustand/middleware'

// interface Movie {
//   imdbID: string
//   Title: string
// }

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      movies: [] as Movies,
      searchText: '',
      isLoading: false
    },
    (set, get) => {
      return {
        setSearchText: (searchText: string) => {
          set({ searchText })
        },
        fetchMovies: async () => {
          const { searchText, isLoading } = get()
          if (isLoading) return
          if (!searchText.trim()) return

          set({ isLoading: true })

          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )

          // Search 속성이 없지만 Default value []를 설정했기 때문에 에러는 안남
          const { Search = [] } = await res.json()

          set({ movies: Search, isLoading: false })
        }
      }
    }
  )
)
