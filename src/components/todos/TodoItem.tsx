import { useState } from 'react'
// [250711] stores/todo 내에 Interface를 export 했기 때문에 가져와서 사용할 수 있음
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'
import TextField from '@/components/TextField'

// [250711] TodoList.tsx todo 속성 받아오기
export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)

  const [title, setTitle] = useState(todo.title)

  // [250711] 수정 모드 꺼졌을 때 원복 처리
  function offEditMode() {
    setIsEditing(false)
    setTitle(todo.title)
  }

  // [250711] 수정 모드 / 출력 모드 추가
  return (
    <li className="mt-2">
      {isEditing ? (
        // [250711] 수정 모드
        // [250711] TextField value={todo.title} 하지 않는 이유 : Read Only 기 때문에 state 처리를 위해서 컴포넌트 사용
        <div className="grid grid-cols-[1fr_100px_100px_100px] items-center gap-2">
          <TextField
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') offEditMode()
            }}
          />
          <Button
            variant="secondary"
            onClick={() => offEditMode()}>
            취소
          </Button>
          <Button variant="primary">저장</Button>
          <Button variant="danger">삭제</Button>
        </div>
      ) : (
        // [250711] 출력 모드
        <div className="grid grid-cols-[20px_1fr_100px] items-center gap-2 leading-[1]">
          <input
            type="checkbox"
            className="h-4 w-4 accent-blue-500"
          />
          <h3>{todo.title}</h3>
          <Button
            variant="primary"
            onClick={() => setIsEditing(true)}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}
