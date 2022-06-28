import { AnimatePresence, motion } from 'framer-motion'

import styles from './Model.module.css'
import { TimesIcon } from '../icons/icons'

const Modal = ({ children, visible, setVisible, backdrop, ...props }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.modal}
          onClick={() => !!backdrop && setVisible(false)}
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
            <TimesIcon onClick={() => setVisible(false)} className={styles.close} />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal