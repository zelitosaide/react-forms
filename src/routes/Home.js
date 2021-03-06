import { useState } from 'react'

import Modal from '../components2/modal/Modal'
import Row from '../components2/row/Row'
import Column from '../components2/column/Column'
import { WarnIcon } from '../components2/icons/icons'

const Home = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ paddingTop: '50px' }}>
      <button onClick={() => setVisible(true)}>Open Modal</button>

      <Modal visible={visible} setVisible={setVisible} backdrop>
        <Row>
          <Column style={{ width: '2.5rem' }}>
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'rgb(254 226 226)',
                borderRadius: 'calc(2.5rem / 2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <WarnIcon style={{ width: '1.5rem', color: 'rgb(220 38 38)' }} />
            </div>
          </Column>
          <Column style={{ width: 'calc(100% - 2.5rem)', }}>
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
            </div>
          </Column>
        </Row>


        <button>Cancel</button>
        <button>Deactivate</button>
      </Modal>
    </div>
  )
}

export default Home