import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  const [title, setTitle] = useState('')
  // [250711] 한번에 하나만 꺼내자!!! (불필요한 리랜더링 방지)
  //  const {createTodo} = useTodoStore()
  const createTodo = useTodoStore(state => state.createTodo)

  //   function handleCreateTodo() { // 타이틀 추가, 불필요 로직 제거}

  return (
    <div>
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          // [250711] 한글이 입력 중일 때는 제출하지 않도록 조건 추가
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') createTodo(title)
        }}
      />
      <Button onClick={() => createTodo(title)}>추가</Button>
    </div>
  )
}
