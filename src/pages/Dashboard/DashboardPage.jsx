import AddGroup from '../../components/AddGroup/AddGroup'
import Groups from '../../components/Groups/Groups'
import styles from './DashboardPage.module.css'

const DashboardPage = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <AddGroup />
        <p className={styles.note}>Press Enter to insert a new group.</p>
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
