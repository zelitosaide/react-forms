import { AnimatePresence, motion } from 'framer-motion'

import { TimesIcon } from '../icons/icons'
import styles from './Alert.module.css'

const Alert = ({ children, visible, setVisible, ...props }) => {
  setTimeout(() => { 
    // setMessages((prevMessages) => prevMessages.slice(1)); 
  }, 5000)
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.alert}
          style={{
            position: 'fixed',
            zIndex: 2000,
            margin: '1rem',
            minWidth: '20rem',
            minHeight: '4.6rem',
            borderRadius: '0.5rem',
            top: props.style?.top === undefined && props.style?.bottom === undefined ? 0 : props.style?.top,
            right: props.style?.right === undefined && props.style?.left === undefined ? 0 : props.style?.right,
            left: props.style?.left,
            bottom: props.style?.bottom,
            ...props.style,
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'tween' }}
        >
          <TimesIcon onClick={() => setVisible(false)} className={styles.close} />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Alert