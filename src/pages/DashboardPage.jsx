import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { getGroups, editGroupName } from '../utils/storage'
import Group from '../components/DashboardPage/Group'
import Empty from '../assets/empty.svg'
import styles from './DashboardPage.module.css'

const DashboardPage = () => {
  const [groups, setGroups] = useState(getGroups())
  const [editedGroup, setEditedGroup] = useState(null)

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
        <div className={styles.groups}>
          {groups.length === 0 && (
            <div className={styles['no-groups']}>
              <p>No groups yet! Let&apos;s add some.</p>
              <img src={Empty} alt='Empty' />
            </div>
          )}
          {groups.map((group) => (
            <Group
              key={group.id}
              group={group}
              editGroupName={editGroupName}
              editedGroup={editedGroup}
              setEditedGroup={setEditedGroup}
              setGroups={setGroups}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DashboardPage
