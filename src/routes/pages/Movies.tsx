import { useOutlet } from 'react-router'
import MovieSearcher from '@/components/movies/MovieSearcher'
import MovieList from '@/components/movies/MovieList'

export default function Movies() {
  const outlet = useOutlet()
  return (
    <main className="max-x-[1200px] mx-auto p-4">
      <MovieSearcher />
      <MovieList />
      {outlet}
    </main>
  )
}
