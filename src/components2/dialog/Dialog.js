import Column from '../column/Column'
import { WarnIcon } from '../icons/icons'
import Input from '../input/Input'
import Modal from '../modal/Modal'
import Row from '../row/Row'
import styles from './Dialog.module.css'

const Dialog = ({ visible, setVisible, type, ...props }) => {
  return (
    <div className={styles.dialog}>
      <Modal {...props} visible={visible} setVisible={setVisible}>
        <Row>
          <Column style={{ width: '2.5rem' }}>
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                // background: 'rgb(254 226 226)',
                background: '#FDECE4',
                borderRadius: 'calc(2.5rem / 2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* <WarnIcon style={{ width: '1.5rem', color: 'rgb(220 38 38)' }} /> */}
              {/* <WarnIcon style={{ width: '1.5rem', color: 'hsl(21, 89%, 56%)' }} /> */}
              <WarnIcon style={{ width: '1.5rem', color: '#f15d0e' }} />
            </div>
          </Column>
          <Column style={{ width: 'calc(100% - 2.5rem)' }}>
            <div style={{ paddingLeft: '1rem' }}>
              <h3
                style={{
                  margin: 0,
                  color: 'rgb(17 24 39)',
                  fontWeight: 500,
                  lineHeight: '1.5rem',
                  fontSize: '1.125rem',
                }}
              >
                Deactivate account
              </h3>
              <p
                style={{
                  color: 'rgb(107 114 128)',
                  lineHeight: '1.25rem',
                  fontSize: '.875rem',
                }}
              >
                Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
              </p>
              <Input style={{ display: 'inline-block', paddingLeft: 0 }}>
                <button type='button'>Deactivate</button>
              </Input>
              <Input style={{ display: 'inline-block' }}>
                <button onClick={() => setVisible(false)} type='button'>Cancel</button>
              </Input>
            </div>
          </Column>
        </Row>
      </Modal>
    </div>
  )
}

export default Dialog