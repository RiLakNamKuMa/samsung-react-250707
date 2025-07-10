// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a
//           href="https://vite.dev"
//           target="_blank">
//           <img
//             src={viteLogo}
//             className="logo"
//             alt="Vite logo"
//           />
//         </a>
//         <a
//           href="https://react.dev"
//           target="_blank">
//           <img
//             src={reactLogo}
//             className="logo react"
//             alt="React logo"
//           />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount(count => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from 'react'

// export default function App() {
//   // return <h1>Hello React!?!</h1>

//   // let count = 1
//   // count : 반응형 데이터 Reactivity Data (상태)
//   const [count, setCount] = useState(1) // 1: Initial Data
//   // const [count, setCount] = useState<number>(1) // TS Generic
//   // const [array, setArray] = useState<string[]>([]) // 빈 배열은 추론이 불가하기 때문에 Generic으로 명시해야 한다.
//   const [message, setMessage] = useState('Hello~')

//   // const getter = countState[0]
//   // const setter = countState[1]

//   function handleClick() {
//     const value = count + 1
//     setCount(value)
//     console.log(value)
//   }

//   // 연결되는 요소에 따라 Generic 명시할 필요가 있음 event!!!
//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setMessage(event.target.value)
//   }

//   // <input
//   //   type="text"
//   //   value={message}
//   //   onChange={event => {
//   //     setMessage(event.target.value)
//   //   }} 양방향 데이터 바인딩 : message 를 가져오고, 변경할 수 있음 -> 이벤트 핸들링
//   // />

//   return (
//     <>
//       <input
//         type="text"
//         value={message}
//         onChange={handleChange}
//       />

//       <h2>{message}</h2>
//       <h1>Count: {count}</h1>
//       <button onClick={handleClick}>증가!</button>
//     </>
//   )
// }

// import { useState } from 'react'
// import './App.css'

// //{/* <h1 id="title" class="title">Hello React!</h1> -> class 는 예약어라서 사용 불가, className!!! */}
// export default function App() {
//   // 반응형 데이터 할당
//   const [isActive, setIsActive] = useState(false)
//   const [size, setSize] = useState(32)

//   return (
//     <>
//       <h1
//         style={{ color: 'red', backgroundColor: 'blue', fontSize: `${size}px` }}
//         className={`title ${isActive ? 'active' : ''}`}>
//         Hello React!
//       </h1>
//       <button
//         onClick={() => {
//           setIsActive(!isActive)
//         }}>
//         토글
//       </button>
//       <button
//         onClick={() => {
//           setSize(size + 10)
//         }}>
//         증가+
//       </button>
//     </>
//   )
// }

// 논리 연산자

// import { useState } from 'react'

// export default function App() {
//   const [message, setMessage] = useState('')

//   return (
//     <>
//       <input
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       {message.trim() && <div>입력된 내용이 있어요~</div>}
//     </>
//   )
// }

// # 삼항 연산자

// import { useState } from 'react'

// export default function App() {
//   const [isActive, setIsActive] = useState(false)

//   function toggle() {
//     setIsActive(!isActive)
//   }

//   return (
//     <>
//       {isActive ? (
//         <h1>활성화 - {String(isActive)}</h1>
//       ) : (
//         <h1>비활성화 - {String(isActive)}</h1>
//       )}
//       <button onClick={toggle}>토글</button>
//     </>
//   )
// }

// # 더 복잡한 조건

// import { useState } from 'react'

// export default function App() {
//   const [state, setState] = useState('')

//   function renderStateMessage() {
//     if (state === 'loading') {
//       return <h2>로딩 중입니다.</h2>
//     } else if (state === 'success') {
//       return <h2>성공적으로 완료되었습니다.</h2>
//     } else {
//       return <h2>대기 중입니다.</h2>
//     }
//   }

//   return (
//     <>
//       <button onClick={() => setState('loading')}>로딩!</button>
//       <button onClick={() => setState('success')}>성공!</button>
//       {renderStateMessage()}
//     </>
//   )
// }

// # 리스트 랜더링
// 자바스크립트 공부 할때, 문자, 숫자, 배열, 객체 - 빌트인 속성 (메서드) 50% 이상 알고 코딩해야 한다!!!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry'])
  const [inputText, setInputText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // return이 랜더링 된 이후에 수행하는 useEffect
  useEffect(() => {
    // inputRef.current === document.querySelector('input')
    // 체이닝 문법 : 없으면 안함
    inputRef.current?.focus()
  }, []) // 첫번째: 콜백, 두번째: 의존성 배열

  function addFruit() {
    setFruits([...fruits, inputText])
    setInputText('')
  }

  return (
    <>
      <h1>과일 목록</h1>
      <input
        ref={inputRef}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => {
          // 영어는 한번 클릭 시 한번 입력, 하지만 한국, 일본, 중국어의 경우는 여러 번 입력해야 하기 때문에 처리 필요함. (웹 개발 시 필요!!!)
          // 리액트는 nativeEvent를 한번 들어가서 접근해야 함.
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') {
            addFruit()
          }
        }}
      />
      <button onClick={() => addFruit()}>추가</button>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}
