import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import Loader from '@/components/Loader'

export default function TodoList() {
  // [250711] 하나씩 가져오기
  const todos = useTodoStore(state => state.todos)
  const isLoadingForFetch = useTodoStore(state => state.isLoadingForFetch)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  // [250711] 의존성 배열 추가를 위해 useEffect 사용
  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  // [250711] fetch 호출 시 로더 추가
  return (
    <>
      <ul>
        {isLoadingForFetch && <Loader size={100} />}
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
