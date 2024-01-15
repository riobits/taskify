import styles from './Feature.module.css'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Feature = ({ title, description, icon }) => {
  return (
    <motion.div
      className={styles.feature}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default Feature
