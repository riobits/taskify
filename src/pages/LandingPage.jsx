import { Link } from 'react-router-dom'
import { Laugh, Pencil, Shield } from 'lucide-react'
import Feature from '../components/LandingPage/Feature'
import styles from './LandingPage.module.css'

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
        <h1>Stay Organized, Get Things Done!</h1>
        <p>
          Maximize productivity effortlessly with our intuitive to-do app. Join
          us and stay organized!
        </p>
        <div>
          <Link
            to='/dashboard'
            className={`${styles.button} ${styles['start-button']}`}
          >
            Get Started
          </Link>
          <Link
            to='/about'
            className={`${styles.button} ${styles['about-button']}`}
          >
            About us
          </Link>
        </div>
      </header>
      <section className={styles['features-section']}>
        <h1>Features</h1>
        <div className={styles.features}>
          {features.map((feature) => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
