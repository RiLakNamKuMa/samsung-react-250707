import { redirect } from 'react-router'

// [250710] 로그인 여부 확인위한 TypeScript Function 추가
// [250710] 사용자 페이지 접근 이전에 가려고 했던 요청 페이지를 저장
export async function requiresAuth({ request }: { request: Request }) {
  // 로그인 여부 확인
  const token = localStorage.getItem('token')
  if (token) return

  // https://localhost:5173/movies/tt123456?a=1&b=2

  const url = new URL(request.url)
  // '/movies/tt123456?a=1&b=2'
  const redirectTo = url.pathname + url.search
  // 주소 넣을 때는 주소를 담을 수 있는 값으로 인코딩이 필요함.
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}
