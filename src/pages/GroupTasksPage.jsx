import { useState } from 'react'
import { useParams } from 'react-router-dom'
import EmojiPicker from 'emoji-picker-react'
import { SmilePlus } from 'lucide-react'
import { getTasks } from '../utils/storage'
import styles from './GroupTasksPage.module.css'

const GroupTasksPage = () => {
  const params = useParams()
  const [tasks, setTasks] = useState(getTasks(params.groupId))
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false)

  const handleToggleEmojiPicker = () => {
    setIsEmojiPickerVisible((prev) => !prev)
  }

  return (
    <div>
      <div className={styles['new-task']}>
        <div>
          <button
            className={styles['emoji-button']}
            onClick={handleToggleEmojiPicker}
          >
            <SmilePlus size={18} />
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
      {/* {tasks.map((task) => {
        return <div key={task.name}>{task.name}</div>
      })} */}
    </div>
  )
}

export default GroupTasksPage
