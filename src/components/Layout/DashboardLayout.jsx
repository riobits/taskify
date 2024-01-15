import { Outlet } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'
import Footer from './Footer'

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
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout
