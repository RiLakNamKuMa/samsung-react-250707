// [250710] 페이지 정보 확인 가능 : useLocation
// [250710] 데이터 감시용 : useEffect
import { NavLink, useLocation, useEffect } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt2975590', label: 'Batman v Superman' },
  { to: '/signin', label: 'Sign In' }
]

export default function Header() {
  const token = localStorage.getItem('token')
  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => {
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              end
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : 'text-black'
              }}>
              {nav.label}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}
