import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import styles from './DashboardNavbar.module.css'

const DashboardNavbar = () => {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
    </div>
  )
}

export default DashboardNavbar
