// // 변수 선언 이름: 타입 = 값
// // 타입 추론
// let num = 123
// num = 456
// // num = true

// console.log(num)

// const user: {
//   name: string
//   age: number
// } = {
//   name: 'Neo',
//   age: 22
// }

// user.age = 24
// // user.age = true

// const fruits: string[] = ['Apple', 'Banana', 'Cherry']
// const numbers = [1, 2, 3, 4, 5]
// const array = [] // 빈 배열은 추론 X

// // 제네릭
// // function add(a: number | string, b: number | string) {
// function add<T>(a: T, b: T) {
//   return a + b
// }

// add<number>(1, 2) // 3
// add<string>('A', 'B') // 'AB'
// // add(1, 'A') // X

// // 개발자 모드에서 입력 가능
// // console.dir(document.querySelector('input'))

// // 클래스
// class Person {}
// const p = new Person()
// let n = 23

// // 인터페이스 : 중복 코드
// interface ABC {
//   name: string
//   age: number
// }

// const userA: ABC = {
//   name: 'Neo',
//   age: 22
// }

// const userB: ABC = {
//   name: 'Evan',
//   age: 22
// }

// console.log(userA, userB)

// interface User<T> {
//   name: string
//   age: T
// }

// const userC: User<number> = {
//   name: 'Neo',
//   age: 22
// }

// const userD: User<string> = {
//   name: 'Evan',
//   age: 22
// }

// console.log(userC, userD)

// 타입 단언 (Assertion) Non-null 단언 연산자
// 개발자가 (불안해 하는?) TS에게 Null이 아니라고 전달
// 아무대서나 남발하면 안됨
const inputEl = document.querySelector('input')

// 1) Non-null 단언 연산자
console.log(inputEl!.value)

// 2) as 단언 키워드
console.log((inputEl as HTMLInputElement).value)

// 타입 가드 (Guard) : 잘못된 동작을 방어해주는 코드 -> 가장 확실한 방법
if (inputEl) console.log(inputEl.value)

// ------------------------------------------------------- //

const user: {
  name: string
  getName: (a: string) => string
} = {
  name: 'Neo',
  getName: (lastName: string) => {
    return `${lastName} ${this.name}`
  }
}
