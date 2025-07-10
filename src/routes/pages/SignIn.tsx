import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { delay } from '@/utils/index'
import { useNavigate, useSearchParams } from 'react-router'

export default function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // [250710] 사용자 페이지 접근 이전에 가려고 했던 요청 페이지를 파라미터를 통해 추출 가능
  const redirectTo = searchParams.get('redirectTo')

  async function singIn() {
    if (isLoading) return
    setIsLoading(true)
    await delay(3000)
    console.log(id, pw)

    // [250710] 로그인 성공 처리 추가, 서버로 부터 토큰을 받았다고 '가정'하고 로컬 스토리지에 저장
    if (id && pw) {
      const token = 'abcd1234'
      localStorage.setItem('token', token)
      navigate(redirectTo || '/')
    }
    setIsLoading(false)
  }

  return (
    <>
      <form
        className="flex max-w-[400px] flex-col gap-2.5"
        onSubmit={e => e.preventDefault()}>
        <TextField
          label="아이디"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="비밀번호를 입력해주세요."
          label="비밀번호"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <Button
          variant="primary"
          loading={isLoading}
          onClick={() => singIn()}>
          로그인
        </Button>
      </form>
    </>
  )
}
