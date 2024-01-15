import styles from './Feature.module.css'
import PropTypes from 'prop-types'

const Feature = ({ title, description, icon }) => {
  return (
    <div className={styles.feature}>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default Feature
