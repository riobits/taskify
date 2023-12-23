import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import DashboardLayout from './components/Layout/DashboardLayout'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import AddGroupPage from './pages/AddGroupPage'
import TasksPage from './pages/TasksPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <LandingPage /> },
        {
          path: '/about',
          element: <AboutPage />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <DashboardPage /> },
        { path: '/dashboard/addgroup', element: <AddGroupPage /> },
        { path: '/dashboard/group/:groupId', element: <TasksPage /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
