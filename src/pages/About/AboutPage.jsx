import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h2>About us</h2>
      <p>
        This is a demo app for my universiry (Toros Universiry). This website is
        made using HTML, CSS, JavaScript and React
      </p>
      <h2>What does this app do?</h2>
      <p>
        This app helps you write down your tasks and keep track of them. You can
        add, edit and delete tasks.
      </p>
    </div>
  )
}

export default AboutPage
