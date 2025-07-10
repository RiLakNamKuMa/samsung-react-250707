import { create } from 'zustand'
// zustand의 확장 기능 : Type 추론 자동
import { combine } from 'zustand/middleware'

// <...> Generic을 지정해주니 ESLint 에러 사라짐
// create<{
//   isActive: boolean
//   toggleActive: () => void
// }>

// export const useIsActiveStore = create((set, get) => {
//   return {
//     isActive: true, // 상태 : state
//     toggleActive: () => {
//       // 액션 : action
//       const { isActive } = get()
//       set({ isActive: !isActive })
//     }
//   } // 반응형 데이터
// })

export const useIsActiveStore = create(
  // combine (상태객체, 액션)
  combine(
    { isActive: true }, // 상태 : state}, (set, get) => {
    set => {
      return {
        isActive: true, // 상태 : state
        toggleActive: () => {
          // 액션 : action
          // const { isActive } = get()
          // set({ isActive: !isActive })
          set(({ isActive }) => {
            return {
              isActive: !isActive
            }
          })
        }
      } // 반응형 데이터
    } // 반응형 데이터
  )
)
