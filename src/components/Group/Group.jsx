import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pen, Trash, X } from 'lucide-react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styles from './Group.module.css'
import { deleteGroup, editGroupName, getGroups } from '../../utils/storage'

const Group = ({ group, setGroups }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleFocus = (event) => event.target.select()

  const handleEditGroup = () => {
    setIsEditing(!isEditing)
  }

  const handleEditGroupSubmit = (event) => {
    event.preventDefault()
    const newName = event.target[0].value
    editGroupName(group.id, newName)
    setGroups(getGroups())
    setIsEditing(false)
  }

  const handleDeleteGroup = (id) => {
    deleteGroup(id)
    setGroups(getGroups())
  }

  return (
    <div className={styles.group}>
      {!isEditing && (
        <div className={styles['group-icons']}>
          <Pen size={20} onClick={handleEditGroup} />
          <Trash size={20} onClick={() => handleDeleteGroup(group.id)} />
        </div>
      )}
      {isEditing && (
        <>
          <div className={styles['group-icons']}>
            <X size={20} onClick={handleEditGroup} />
          </div>
          <form onSubmit={handleEditGroupSubmit}>
            <input
              defaultValue={group.name}
              autoFocus
              onFocus={handleFocus}
              className={styles.input}
            />
            <p className={styles.note}>Press Enter to save changes.</p>
          </form>
        </>
      )}
      <Link to={`/dashboard/group/${group.id}`}>
        {!isEditing && <h2>{group.name}</h2>}
        <p>Last Update: {moment(group.updatedAt).fromNow()}</p>
      </Link>
    </div>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired,
  setGroups: PropTypes.func.isRequired,
}

export default Group
