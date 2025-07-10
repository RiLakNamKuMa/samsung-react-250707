import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const isLoading = useMovieStore(state => state.isLoading)
  const setSearchText = useMovieStore(state => state.setSearchText)

  return (
    <div className="grid grid-cols-[1fr_100px] gap-2">
      <TextField
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value)
        }}
        onKeyDown={e => {
          // 한글 입력 시 2번 전송하지 않도록 방지하는 코드
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') fetchMovies()
        }}
      />
      <Button
        loading={isLoading}
        variant="primary"
        onClick={fetchMovies}>
        검색
      </Button>
    </div>
  )
}
