import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoList() {
  // [250711] 하나씩 가져오기
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  // [250711] 의존성 배열 추가를 위해 useEffect 사용
  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
