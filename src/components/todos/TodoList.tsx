import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import Loader from '@/components/Loader'
import TodoItem from '@/components/todos/TodoItem'

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
  // [250711] TodoItem 에서 todo 속성을 보내서 처리할 수 있도록 수정
  return (
    <>
      <ul>
        {isLoadingForFetch && <Loader size={100} />}
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
