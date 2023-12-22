import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import { SmilePlus } from 'lucide-react'
import styles from './GroupTasksPage.module.css'

const GroupTasksPage = () => {
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false)

  const handleToggleEmojiPicker = () => {
    setIsEmojiPickerVisible((prev) => !prev)
  }

  return (
    <div>
      <div className={styles['new-task']}>
        <div>
          <button className={styles['emoji-button']}>
            <SmilePlus size={18} onClick={handleToggleEmojiPicker} />
          </button>
          <div className={styles['emoji-picker-container']}>
            {isEmojiPickerVisible && <EmojiPicker />}
          </div>
        </div>
        <input
          placeholder='Insert a new task...'
          className={styles['new-task-input']}
        />
      </div>
      <p className={styles.note}>Press Enter to insert.</p>
    </div>
  )
}

export default GroupTasksPage
