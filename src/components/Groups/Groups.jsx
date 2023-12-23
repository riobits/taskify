import { useState } from 'react'
import { deleteGroup, editGroupName, getGroups } from '../../utils/storage'
import Group from '../Group/Group'
import Empty from '../../assets/empty.svg'
import styles from './Groups.module.css'

const Groups = () => {
  const [groups, setGroups] = useState(getGroups())
  const [editedGroup, setEditedGroup] = useState(null)

  const handleEditGroup = (id) => {
    setEditedGroup(id)
  }

  const handleEditGroupCancel = () => {
    setEditedGroup(null)
  }

  const handleEditGroupSubmit = (event) => {
    event.preventDefault()
    const newName = event.target[0].value
    editGroupName(editedGroup, newName)
    setGroups(getGroups())
    setEditedGroup(null)
  }

  const handleDeleteGroup = (id) => {
    deleteGroup(id)
    setGroups(getGroups())
  }

  return (
    <div className={styles.groups}>
      {groups.length === 0 && (
        <div className={styles['no-groups']}>
          <p>No groups yet! Let&apos;s add some.</p>
          <img src={Empty} alt="Empty" />
        </div>
      )}
      {groups.map((group) => (
        <Group
          key={group.id}
          group={group}
          editedGroup={editedGroup}
          handleDeleteGroup={handleDeleteGroup}
          handleEditGroup={handleEditGroup}
          handleEditGroupCancel={handleEditGroupCancel}
          handleEditGroupSubmit={handleEditGroupSubmit}
        />
      ))}
    </div>
  )
}

export default Groups
