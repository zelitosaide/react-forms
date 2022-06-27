import styles from './Fieldset.module.css'

const Fieldset = ({ label, error, childstyle, children, ...props }) => {
  return (
    <>
      <fieldset {...props} style={{ ...props.style }} className={styles.fieldset}>
        <legend style={childstyle}>{label}</legend>
        {children}
      </fieldset>
      <div className={styles.error}>{error}</div>
    </>
  )
}

export default Fieldset