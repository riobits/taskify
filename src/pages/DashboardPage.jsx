import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pen, Plus, Trash, X } from 'lucide-react'
import { deleteGroup, getGroups, editGroupName } from '../utils/storage'
import moment from 'moment'
import Empty from '../assets/empty.svg'
import styles from './DashboardPage.module.css'

const DashboardPage = () => {
  const [groups, setGroups] = useState(getGroups())
  const [editedGroup, setEditedGroup] = useState(null)

  const handleEditGroup = (id) => {
    setEditedGroup(id)
  }

  const handleEditGroupCancel = () => {
    setEditedGroup(null)
  }

  const handleFocus = (event) => event.target.select()

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
              <p>No groups yet! let&apos;s add some</p>
              <img src={Empty} alt='Empty' />
            </div>
          )}
          {groups.map((group) => (
            <div key={group.id} className={styles.group}>
              {editedGroup !== group.id && (
                <div className={styles['group-icons']}>
                  <Pen size={20} onClick={() => handleEditGroup(group.id)} />
                  <Trash
                    size={20}
                    onClick={() => handleDeleteGroup(group.id)}
                  />
                </div>
              )}
              {editedGroup && editedGroup === group.id && (
                <div className={styles['group-icons']}>
                  <X size={20} onClick={handleEditGroupCancel} />
                </div>
              )}
              {editedGroup && editedGroup === group.id && (
                <form onSubmit={handleEditGroupSubmit}>
                  <input
                    defaultValue={group.name}
                    autoFocus
                    onFocus={handleFocus}
                  />
                </form>
              )}
              <Link to={`/dashboard/group/${group.id}`}>
                {editedGroup !== group.id && <h2>{group.name}</h2>}
                <p>{group.description}</p>
                <p>Last Update: {moment(group.createdAt).fromNow()}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DashboardPage
