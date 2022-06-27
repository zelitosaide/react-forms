import styles from './Section.module.css'

const Section = ({ children, ...props }) => {
  return (
    <div {...props} style={{ ...props.style }} className={styles.section}>
      {children}
    </div>
  )
}

export default Section