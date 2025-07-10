// import Container from '@/components/contexts/Container'
//
// export const IsActiveContext = createContext(true)
//
// export default function App() {
//   //const isActive = true
//   const [isActive, setIsActive] = useState(false)
//   return (
//     <>
//       <button onClick={() => setIsActive(!isActive)}>토글</button>
//       <IsActiveContext.Provider value={isActive}>
//         <Container />
//       </IsActiveContext.Provider>
//     </>
//   )
// }

// import Container from '@/components/contexts/Container'
// import { useIsActiveStore } from '@/stores/isActive'

// export default function App() {
//   //const isActive = true
//   const toggleActive = useIsActiveStore(state => state.toggleActive)
//   return (
//     <>
//       <button onClick={toggleActive}>토글</button>
//       <Container />
//     </>
//   )
// }

// 중앙 집중식 데이터 저장소 (Store)

import { useCountStore } from '@/stores/count'

export default function App() {
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const increase = useCountStore(state => state.increase)
  return (
    <>
      <h1>
        {count} / {double}
      </h1>
      <button onClick={increase}>증가</button>
    </>
  )
}
