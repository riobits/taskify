import { useState } from 'react'
import { getGroups } from '../../utils/storage'
import Group from '../Group/Group'
import Empty from '../../assets/empty.svg'
import styles from './Groups.module.css'

const Groups = () => {
  const [groups, setGroups] = useState(getGroups())

  return (
    <div className={styles.groups}>
      {groups.length === 0 && (
        <div className={styles['no-groups']}>
          <p>No groups yet! Let&apos;s add some.</p>
          <img src={Empty} alt="Empty" />
        </div>
      )}
      {groups.map((group) => (
        <Group key={group.id} group={group} setGroups={setGroups} />
      ))}
    </div>
  )
}

export default Groups
