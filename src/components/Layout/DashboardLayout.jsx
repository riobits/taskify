import { Outlet } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '1rem',
        }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout
