import { Link } from 'react-router-dom'
import { Pen, Trash, X } from 'lucide-react'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './Group.module.css'

const Group = ({
  group,
  editedGroup,
  handleEditGroup,
  handleEditGroupCancel,
  handleEditGroupSubmit,
  handleDeleteGroup,
}) => {
  const handleFocus = (event) => event.target.select()

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
          <input
            defaultValue={group.name}
            autoFocus
            onFocus={handleFocus}
            className={styles.input}
          />
          <p className={styles.note}>Press Enter to save changes.</p>
        </form>
      )}
      <Link to={`/dashboard/group/${group.id}`}>
        {editedGroup !== group.id && <h2>{group.name}</h2>}
        <p>{group.description}</p>
        <p>Last Update: {moment(group.updatedAt).fromNow()}</p>
      </Link>
    </div>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired,
  editedGroup: PropTypes.number,
  handleEditGroup: PropTypes.func.isRequired,
  handleEditGroupCancel: PropTypes.func.isRequired,
  handleEditGroupSubmit: PropTypes.func.isRequired,
  handleDeleteGroup: PropTypes.func.isRequired,
}

export default Group
