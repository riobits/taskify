import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTasks, addTask, editTask, deleteTask } from '../utils/storage'
import NoTasks from '../assets/no-tasks.svg'
import AddTask from '../components/TasksPage/AddTask'
import Task from '../components/TasksPage/Task'
import styles from './TasksPage.module.css'

const TasksPage = () => {
  const { groupId } = useParams()
  const [tasks, setTasks] = useState(getTasks(+groupId))

  const handleAddTask = (emoji, name) => {
    addTask(+groupId, emoji, name)
    setTasks(getTasks(+groupId))
  }

  const handleEditTask = (taskId, name, emoji, isCompleted) => {
    editTask(+groupId, +taskId, name, emoji, isCompleted)
    setTasks(getTasks(+groupId))
  }

  const handleDeleteTask = (taskId) => {
    deleteTask(+groupId, +taskId)
    setTasks(getTasks(+groupId))
  }

  return (
    <div>
      <AddTask handleAddTask={handleAddTask} />
      {tasks.length === 0 && (
        <div className={styles['no-tasks']}>
          <h2>No tasks yet! Let&apos;s add some.</h2>
          <img src={NoTasks} alt='Empty' />
        </div>
      )}
      {!!tasks.length && (
        <div className={styles.tasks}>
          <p>Your tasks:</p>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              emoji={task.emoji}
              name={task.name}
              completed={task.completed}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TasksPage
