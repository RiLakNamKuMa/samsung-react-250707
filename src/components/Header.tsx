// [250710] 페이지 정보 확인 가능 : useLocation
// [250710] 데이터 감시용 : useEffect
import { NavLink, useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt2975590', label: 'Batman v Superman' },
  { to: '/signin', label: 'Sign In' }
]

export default function Header() {
  // [250710] Token 정보를 위한 반응형 데이터 추가
  const [token, setToken] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  // [250710] Token 정보를 매번 확인
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [location])

  function signOut() {
    localStorage.removeItem('token')
    // [250710] 메인 화면으로 이동한 후 새로 고침
    // navigate('/') 은 이동만 시키는거임
    navigate('/')
    window.location.reload()
  }

  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => {
          // [250710] 조건부 랜더링 추가
          const isSignIn = nav.to === '/signin'
          if (isSignIn && token) return null
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              end
              // [250710] 조건부 랜더링 추가를 위한 주석 추가
              // style={{
              //   display: nav.to === '/signin' && token ? 'none' : 'block'
              // }}
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : 'text-black'
              }}>
              {nav.label}
            </NavLink>
          )
        })}
        {token && <Button onClick={signOut}>로그아웃</Button>}
      </nav>
    </header>
  )
}
