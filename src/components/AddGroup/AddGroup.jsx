import { useState } from 'react'
import { addGroup } from '../../utils/storage'
import styles from './AddGroup.module.css'

const AddGroup = () => {
  const [groupName, setGroupName] = useState('')

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value)
  }

  const handleAddGroup = (e) => {
    e.preventDefault()
    addGroup(groupName)
    setGroupName('')
    window.location.reload()
  }

  return (
    <form onSubmit={handleAddGroup}>
      <input
        placeholder="Insert a new task..."
        value={groupName}
        onChange={handleGroupNameChange}
        autoFocus
        className={styles.input}
      />
    </form>
  )
}

export default AddGroup
