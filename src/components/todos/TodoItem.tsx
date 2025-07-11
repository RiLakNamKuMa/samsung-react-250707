// [250711] 내부 요소 참조!!! --> useRef
import { useState, useRef, useEffect } from 'react'
// [250711] stores/todo 내에 Interface를 export 했기 때문에 가져와서 사용할 수 있음
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { useTodoStore } from '@/stores/todo'

// [250711] TodoList.tsx todo 속성 받아오기
export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const isLoadingForUpdate = useTodoStore(state => state.isLoadingForUpdate)

  // [250711] 데이터가 바뀌었다고 화면이 랜더링 되는게 아니다... 그래서 useEffect로 데이터를 감시!!!
  // isEditing = true 일 때만 TextField의 focus를 잡아라
  useEffect(() => {
    if (isEditing) inputRef.current?.focus()
  }, [isEditing])

  // [250711] 수정 모드 켜졌을 때 처리
  function onEditMode() {
    setIsEditing(true)
    setTitle(todo.title)
  }

  // [250711] 수정 모드 꺼졌을 때 원복 처리
  function offEditMode() {
    setIsEditing(false)
    setTitle(todo.title)
  }

  // [250711] 수정 "저장" 버튼 처리 시 필요한 이벤트
  async function handleSave() {
    if (title === todo.title) return
    // title: title 속성:data 의 이름이 같으면 생략 가능 -> title
    await updateTodo({ ...todo, title })
    offEditMode()
  }

  // [250711] 수정 모드 / 출력 모드 추가
  return (
    <li className="mt-2">
      {isEditing ? (
        // [250711] 수정 모드
        // [250711] TextField value={todo.title} 하지 않는 이유 : Read Only 기 때문에 state 처리를 위해서 컴포넌트 사용
        <div className="grid grid-cols-[1fr_100px_100px_100px] items-center gap-2">
          <TextField
            // [250711] ref 추가 해서 TextField의 input 태그의 ref 참조 가능
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.nativeEvent.isComposing) return
              if (e.key === 'Escape') offEditMode()
              if (e.key === 'Enter') handleSave()
            }}
          />
          <Button
            variant="secondary"
            onClick={() => offEditMode()}>
            취소
          </Button>
          <Button
            variant="primary"
            loading={isLoadingForUpdate}
            onClick={handleSave}>
            저장
          </Button>
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
            onClick={() => onEditMode()}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}
