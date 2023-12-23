import { useState } from 'react'
import { addGroup } from '../../utils/storage'
import styles from './AddGroupPage.module.css'

import './AddGroupPage.module.css'
import { useNavigate } from 'react-router-dom'

const AddGroupPage = () => {
  const [groupName, setGroupName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setGroupName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!groupName) return setError('Please enter a group name')

    addGroup(groupName)
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Add Tasks Group</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Group Name
        </label>
        <input
          type="text"
          value={groupName}
          id="name"
          placeholder="Enter group name"
          onChange={handleNameChange}
          className={styles.input}
          autoFocus
        />
        <p className={styles.error}>{error}</p>
        <button type="submit" className={styles.button}>
          Add Group
        </button>
      </form>
    </div>
  )
}

export default AddGroupPage
