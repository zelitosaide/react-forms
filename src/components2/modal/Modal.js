import { AnimatePresence, motion } from 'framer-motion'

import styles from './Model.module.css'

const Modal = ({ children, visible, setVisible, ...props }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.modal}
          onClick={() => setVisible(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            {...props}
            style={{ ...props.style }}
            className={styles.content}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ type: 'tween' }}
          >
            <span className={styles.close} onClick={() => setVisible(false)}>&times;</span>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal