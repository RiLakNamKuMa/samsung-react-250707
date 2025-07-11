import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

// Template
// export const useTodoStore = create(
//   combine({}, () => {
//     return {}
//   })
// )

type Todos = Todo[] // 할 일 목록
interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

// [250711] 중복 코드 최소화를 위한 Rest API Template 만들기
const api = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: import.meta.env.VITE_APIKEY,
    username: import.meta.env.VITE_USERNAME
  }
})

export const useTodoStore = create(
  combine(
    { todos: [] as Todos, isLoadingForFetch: true, isLoadingForCreate: false },
    (set, get) => {
      // [250710] Todo List 갱신을 위한 비동기 함수 추가
      return {
        fetchTodos: async () => {
          // [250711] 가져올 때 마다 true 설정
          set({ isLoadingForFetch: true })
          const { data } = await api({ method: 'GET' })
          // [250711] 가져오고 나서 false 설정
          set({ todos: data, isLoadingForFetch: false })
        },
        // [250711] Todo 항목 추가
        // https://www.heropy.dev/p/QOWqjV#h3_%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%A0%95%EC%9D%98_%EA%B5%AC%EC%84%B1
        createTodo: async (title: string) => {
          // [250711] 추가할 때 true 설정, get()으로 바로 꺼내서 참조 가능
          if (get().isLoadingForCreate) return
          set({ isLoadingForCreate: true })
          const { data } = await api({ method: 'POST', data: { title } })
          set(state => {
            return {
              todos: [data, ...state.todos]
            }
          })
          // [250711] 추가 완료 하면 false 설정
          set({ isLoadingForCreate: false })
        }
      }
    }
  )
)
