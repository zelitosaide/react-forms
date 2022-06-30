import styles from './Input.module.css'

const Input = ({ children, label, error, ...props }) => {
  const type = children?.props?.type

  const bgColor = props?.style?.['--bgColor'] || '#f3722c'
  const bgHover = props?.style?.['--bgHover'] || '#f15d0e'
  const bgActive = props?.style?.['--bgActive'] || '#d9540d'

  return (
    <div
      {...props}
      style={{
        ...props.style,
        '--bgColor': bgColor,
        '--bgHover': bgHover,
        '--bgActive': bgActive
      }}
      className={styles.input}
    >
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