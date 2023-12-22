import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import Groups from '../components/DashboardPage/Groups'
import styles from './DashboardPage.module.css'

const DashboardPage = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <Link to='/dashboard/addgroup' className={styles['add-btn']}>
          <Plus />
          Add Group
        </Link>
        <p className={styles.note}>
          Each group contains a list of tasks. Use groups to separate your
          tasks!
        </p>
      </div>
      <Groups />
    </>
  )
}

export default DashboardPage
