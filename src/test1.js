// 객체 데이터 구조 할당
// const info = { name: 'Neo', age: 12, isValid: true, email: 'abc@xxx.com' }
// const { name, age, ...abc } = info

// console.log(name)
// console.log(age)
// console.log(abc)

// // 배열 구조 할당
// const numbers = [1, 2, 3, 4, 5]
// const [a, b, , c] = numbers

// -------------------------------------------------------------------------

//https://www.heropy.dev/p/Zr4RfI#h2_Promise

// const isDone = true

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('대기')
//     if (isDone) {
//       resolve() // 이행
//     } else {
//       reject() // 거부
//     }
//   }, 3000)
// })

// const res = await promise
// console.log(res)

// function delay(ms = 3000) {
//   const promise = new Promise(resolve => {
//     setTimeout(resolve(), ms)
//   })

//   return promise
// }

// await Promise.all([delay(5000), delay(1000), delay(2000), delay(7000)])

// -------------------------------------------------------------------------

// Named Export (이름 내보내기) - N 번 내보내기 가능, 이름 필수
export const a = 123
export const b = true
export const c = {}

// Default Export (기본 내보내기) - 1 번만 내보내기 가능, 이름 X
export default 123

// import hello, { a, b, c } from './test1' <---- 가져올 때

const string = '123'
// const number = +string (숫자로 변경하는 코드? 기교?)
const number1 = Number(string)
const number2 = Number.parseInt(string) // <--- 추천 : Namespace 사용해서 변환하길
const number3 = Number.parseFloat(string)
// const number4 = parseInt(string)
