import { Link } from 'react-router'
import { useMovieStore } from '@/stores/movie'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  return (
    <div className="mt-[20px]">
      <ul className="flex flex-wrap gap-3">
        {movies.map(movie => {
          return (
            <li
              key={movie.imdbID}
              className="relative h-[300px] w-[200px]">
              <Link to={`/movies/${movie.imdbID}`}>
                <h3 className="relative z-1 bg-black/50 p-2 text-white">
                  {movie.Title} / {movie.Year}
                </h3>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="lefe-0 absolute top-0 h-full w-full"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
