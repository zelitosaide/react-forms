import styles from './Row.module.css'

const Row = ({ children, ...props }) => {
  return (
    <div {...props} style={{ ...props.style }} className={styles.row}>
      {children}
    </div>
  )
}

export default Row