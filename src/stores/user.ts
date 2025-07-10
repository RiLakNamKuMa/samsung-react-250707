import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const userUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'Neo',
          age: 22,
          address: {
            city: 'Seoul',
            country: 'Korea',
            emails: ['neo@gmail.com', 'neo@naver.com']
          }
        }
      },
      set => {
        return {
          changeFirstEmail: (email: string) => {
            // 1) immer 라이브러리 사용 전
            //   set(state => {
            //     return {
            //       user: {
            //         ...state.user,
            //         address: {
            //           ...state.user.address,
            //           email: [email, state.user.address.emails[1]]
            //         }
            //       }
            //     }
            //   })
            // 2) immer 라이브러리 사용 시 (immer : 복잡한 객체 데이터를 수정할 때 불변성 유지하면서 사용)
            set(state => {
              state.user.address.emails[0] = email
            })
          }
        }
      }
    )
  )
)
