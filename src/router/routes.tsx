import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Loader } from '../components/Loader'

const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })))
const SkillsPage = lazy(() => import('../pages/SkillsPage').then((m) => ({ default: m.SkillsPage })))
const LeadershipPage = lazy(() => import('../pages/LeadershipPage').then((m) => ({ default: m.LeadershipPage })))
const ContactPage = lazy(() => import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })))
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
      { path: '/projects', element: withLoader(<ProjectsPage />) },
      { path: '/skills', element: withLoader(<SkillsPage />) },
      { path: '/leadership', element: withLoader(<LeadershipPage />) },
      { path: '/contact', element: withLoader(<ContactPage />) },
      { path: '*', element: withLoader(<NotFoundPage />) },
    ],
  },
])
