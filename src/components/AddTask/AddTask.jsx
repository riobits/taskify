import { useState } from 'react'
import PropTypes from 'prop-types'
import EmojiPicker from 'emoji-picker-react'
import { SmilePlus } from 'lucide-react'
import Task from '../Task/Task'
import styles from './AddTask.module.css'

const AddTask = ({ handleAddTask }) => {
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false)
  const [emoji, setEmoji] = useState('')
  const [name, setName] = useState('')

  const handleToggleEmojiPicker = () => {
    setIsEmojiPickerVisible((prev) => !prev)
  }

  const handleEmojiClick = ({ emoji }) => {
    setEmoji(emoji)
    setIsEmojiPickerVisible(false)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const enterHandler = (e) => {
    if (e.key !== 'Enter') return

    if (!name) return alert('Please insert a task name.')

    handleAddTask(emoji, name)
    setEmoji('📃')
    setName('')
  }

  return (
    <div>
      <div className={styles['new-task']}>
        <div className={styles['emoji-input-container']}>
          <button
            type="button"
            onClick={handleToggleEmojiPicker}
            className={styles['emoji-button']}
          >
            <SmilePlus size={18} />
          </button>
          <div className={styles['emoji-picker-container']}>
            {isEmojiPickerVisible && (
              <EmojiPicker
                emojiStyle="native"
                onEmojiClick={handleEmojiClick}
              />
            )}
          </div>
        </div>
        <input
          placeholder="Insert a new task..."
          value={name}
          onChange={handleNameChange}
          onKeyDown={enterHandler}
          className={styles['new-task-input']}
        />
      </div>
      <p className={styles.note}>Press Enter to insert.</p>
      {name && (
        <div className={styles.preview}>
          <h2>Preview</h2>
          <Task emoji={emoji} name={name} preview />
        </div>
      )}
    </div>
  )
}

AddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
}

export default AddTask
