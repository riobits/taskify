import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className={styles['logo-wrapper']}>
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
