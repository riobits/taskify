import { Link } from 'react-router-dom'
import { Pen, Trash, X } from 'lucide-react'
import { deleteGroup, editGroupName, getGroups } from '../../utils/storage'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './Group.module.css'

const Group = ({ group, editedGroup, setGroups, setEditedGroup }) => {
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
    <div className={styles.group}>
      {editedGroup !== group.id && (
        <div className={styles['group-icons']}>
          <Pen size={20} onClick={() => handleEditGroup(group.id)} />
          <Trash size={20} onClick={() => handleDeleteGroup(group.id)} />
        </div>
      )}
      {editedGroup && editedGroup === group.id && (
        <div className={styles['group-icons']}>
          <X size={20} onClick={handleEditGroupCancel} />
        </div>
      )}
      {editedGroup && editedGroup === group.id && (
        <form onSubmit={handleEditGroupSubmit}>
          <input defaultValue={group.name} autoFocus onFocus={handleFocus} />
        </form>
      )}
      <Link to={`/dashboard/group/${group.id}`}>
        {editedGroup !== group.id && <h2>{group.name}</h2>}
        <p>{group.description}</p>
        <p>Last Update: {moment(group.createdAt).fromNow()}</p>
      </Link>
    </div>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired,
  editedGroup: PropTypes.string.isRequired,
  setGroups: PropTypes.func.isRequired,
  setEditedGroup: PropTypes.func.isRequired,
  editGroupName: PropTypes.func.isRequired,
}

export default Group
