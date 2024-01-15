import { Link } from 'react-router-dom'
import { Laugh, Pencil, Shield } from 'lucide-react'
import Feature from '../../components/Feature/Feature'
import styles from './LandingPage.module.css'
import GroupsPreviewImage from '../../assets/groups-preview.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const LandingPage = () => {
  const features = [
    {
      title: 'Easy to use',
      description: 'You don’t even need to learn how to use it!',
      icon: <Laugh size={40} />,
    },
    {
      title: 'Secure',
      description: 'Your tasks are stored on your own device and not shared.',
      icon: <Shield size={40} />,
    },
    {
      title: 'Easy to manage',
      description: 'Add, delete and edit your tasks easily!',
      icon: <Pencil size={40} />,
    },
  ]

  return (
    <>
      <header>
        <TypeAnimation
          sequence={[
            'Stay Organized with Taskify',
            1000,
            'Stay Organized, Get Things Done!',
            1000,
            'Create and Organize Your To-Do List',
            1000,
            'Prioritize Your Daily Responsibilities',
            1000,
            'Achieve Productivity Milestones with Taskify',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: '2.5rem', fontWeight: 'normal' }}
          repeat={Infinity}
        />

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          Maximize productivity effortlessly with our intuitive to-do app. Join
          us and stay organized!
        </motion.p>
        <div>
          <Link
            to="/dashboard"
            className={`${styles.button} ${styles['start-button']}`}
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className={`${styles.button} ${styles['about-button']}`}
          >
            About us
          </Link>
        </div>
      </header>
      <section className={styles['features-section']}>
        <h1>Features</h1>
        <div className={styles.features}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Feature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className={styles['groups-section']}>
        <div className={styles['groups-content']}>
          <h1>Add Task Groups</h1>
          <p>
            Organize your tasks by adding groups. You can add as many groups as
            you want!
          </p>
        </div>
        <div className={styles['groups-preview']}>
          <img src={GroupsPreviewImage} alt="Add Tasks Groups" />
        </div>
      </section>
    </>
  )
}

export default LandingPage
