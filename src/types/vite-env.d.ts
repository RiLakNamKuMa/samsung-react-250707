// [250710] 타입을 선언하는 파일 추가 (*.d.ts)
// /src/stores/todo.ts 파일에서 사용하는 환경 변수의 타입 지정을 위한 작업

// 미리 만들어져 있는 타입 내용을 가져와서 사용하겠다!
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APIKEY: string
  VITE_USERNAME: string
}
