import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import EmptyLayout from '@/routes/layouts/Empty'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import NotFound from '@/routes/pages/NotFound'
import SignIn from '@/routes/pages/SignIn'
import { requiresAuth } from '@/routes/loaders/index'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/movies',
        element: <Movies />,
        // [250710] SignIn 완료된 사용자에 한해서만 접근 가능하도록 처리 : loader 추가
        // 페이지로 접속 하기 이전의 처리를 위해 loader를 수행한다.
        loader: requiresAuth,
        children: [{ path: '/movies/:movieId', element: <MovieDetails /> }]
      },
      // [250710] Route 객체 추가 : SignIn
      // "로그인 페이지"
      { path: '/signin', element: <SignIn /> }
    ]
  },
  // [250710] Route 객체 추가 : EmptyLayout
  // "찾을 수 없는 페이지"
  { element: <EmptyLayout />, children: [{ path: '*', element: <NotFound /> }] }

  //   {
  //     element: <EmptyLayout />,
  //     children: [
  //       { path: '/', element: <Home /> },
  //       { path: '/about', element: <About /> }
  //     ]
  //   }
])

export default function Router() {
  return <RouterProvider router={router} />
}
