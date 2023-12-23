import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import DashboardLayout from './components/Layout/DashboardLayout'
import LandingPage from './pages/Landing/LandingPage'
import AboutPage from './pages/About/AboutPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import AddGroupPage from './pages/AddGroup/AddGroupPage'
import TasksPage from './pages/Tasks/TasksPage'

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
