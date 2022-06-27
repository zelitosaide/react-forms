import styles from './Input.module.css'

const Input = ({ children, label, error, ...props }) => {
  const type = children?.props.type

  return (
    <div {...props} style={{ ...props.style }} className={styles.input}>
      {type === 'checkbox' ? (
        <>
          <span className={styles.checkbox}>{children}</span>
          {!!label && (
            <label className={styles.checkboxlabel} htmlFor={label}>{label}</label>
          )}
          {!!error && (
            <div style={{ paddingLeft: '1.65rem' }} className={styles.error}>{error}</div>
          )}
        </>
      ) : type === 'radio' ? (
        <>
          <span className={styles.radio}>{children}</span>
          {!!label && (
            <label className={styles.radiolabel} htmlFor={label}>{label}</label>
          )}
          {!!error && (
            <div style={{ paddingLeft: '1.65rem' }} className={styles.error}>{error}</div>
          )}
        </>
      ) : (
        <>
          {!!label && (
            <label className={styles.label} htmlFor={label}>{label}</label>
          )}
          <div className={styles.child}>{children}</div>
          {!!error && (
            <div className={styles.error}>{error}</div>
          )}
        </>
      )}
    </div>
  )
}

export default Input