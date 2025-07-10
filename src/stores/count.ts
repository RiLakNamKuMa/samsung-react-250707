import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage
} from 'zustand/middleware'

export const useCountStore = create(
  // persist : 내용, 옵션
  persist(
    subscribeWithSelector(
      combine(
        {
          count: 0,
          double: 0
        },
        set => ({
          increase: () => {
            // set(({ count }) => ({ count: count + 1 }))
            set(state => {
              return { count: state.count + 1 }
            })
          },
          decrease: () => {
            set(state => {
              return { count: state.count - 1 }
            })
          }
        })
      )
    ),
    {
      name: 'countStore',
      version: 1,
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)

useCountStore.subscribe(
  state => state.count, //선택자 함수
  count => {
    //실행할 함수
    useCountStore.setState({ double: count * 2 })
  }
)
