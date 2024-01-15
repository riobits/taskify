import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1>About us</h1>
      <p>
        This is a demo app for my universiry (Toros Universiry). This website is
        made using HTML, CSS, JavaScript and React
      </p>
      <h2>What does this app do?</h2>
      <p>
        This app helps you write down your tasks and keep track of them. You can
        add, edit and delete tasks.
      </p>
      <h2>Who made this website?</h2>
      <p>
        This website was made by <em>ABDULGHANI JASRI</em>
      </p>
    </div>
  )
}

export default AboutPage
