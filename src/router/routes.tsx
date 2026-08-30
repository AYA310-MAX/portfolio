import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Loader } from '../components/Loader'

const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function withLoader(element: React.ReactNode) {
  return <Suspense fallback={<Loader />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: withLoader(<HomePage />) },
      { path: '/about', element: withLoader(<AboutPage />) },
      { path: '*', element: withLoader(<NotFoundPage />) },
    ],
  },
])
