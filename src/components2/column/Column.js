import styles from './Column.module.css'

const Column = ({ children, ...props}) => {
  return (
    <div {...props} style={{ ...props.style }} className={styles.column}>
      {children}
    </div>
  )
}

export default Column