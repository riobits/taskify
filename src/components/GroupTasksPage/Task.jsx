import { useState } from 'react'
import PropTypes from 'prop-types'
import { Pen, Trash } from 'lucide-react'
import EmojiPicker from 'emoji-picker-react'
import styles from './Task.module.css'

const Task = ({
  preview,
  id,
  emoji,
  name,
  completed,
  handleEditTask,
  handleDeleteTask,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showNameInput, setShowNameInput] = useState(false)
  const [newName, setNewName] = useState(name)

  const handleFocus = (event) => event.target.select()

  const toggleEmojiPicker = () => {
    if (preview) return
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleComplete = () => {
    if (preview) return
    handleEditTask(id, emoji, name, !completed)
  }

  const handleEmojiClick = ({ emoji: newEmoji }) => {
    if (preview) return
    handleEditTask(id, newEmoji, name, completed)
    setShowEmojiPicker(false)
  }

  const handleDelete = () => {
    if (preview) return
    handleDeleteTask(id)
  }

  const handleNameChange = (e) => {
    if (preview) return
    setNewName(e.target.value)
  }

  const handleNameEdit = () => {
    if (preview) return
    setShowNameInput(true)
  }

  const handleNameSave = () => {
    if (preview) return
    handleEditTask(id, emoji, newName, completed)
    setShowNameInput(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNameSave()
  }

  return (
    <div className={`${styles.task} ${completed && styles['task-completed']}`}>
      <div className={styles['task-content']}>
        <div onClick={toggleEmojiPicker} className={styles.emoji}>
          {emoji || '📃'}
        </div>
        {showEmojiPicker && (
          <div className={styles['emoji-picker-container']}>
            <EmojiPicker emojiStyle='native' onEmojiClick={handleEmojiClick} />
          </div>
        )}
        {!showNameInput && (
          <label htmlFor={id} className={styles.name}>
            {name}
          </label>
        )}
        {showNameInput && (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id={id}
              value={newName}
              onChange={handleNameChange}
              onFocus={handleFocus}
              autoFocus
              className={styles['name-input']}
            />
          </form>
        )}
      </div>
      <div className={styles.actions}>
        <button onClick={handleDelete} className={styles.button}>
          <Trash size={18} />
        </button>
        <button onClick={handleNameEdit} className={styles.button}>
          <Pen size={18} />
        </button>
        <input
          type='checkbox'
          id={id}
          checked={completed}
          disabled={preview}
          onChange={handleComplete}
          className={styles.checkbox}
        />
      </div>
    </div>
  )
}

Task.propTypes = {
  preview: PropTypes.bool,
  id: PropTypes.number,
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  handleEditTask: PropTypes.func,
  handleDeleteTask: PropTypes.func,
}

export default Task
