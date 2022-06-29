import Alert from '../alert/Alert'
import Column from '../column/Column'
import { CheckCircleIcon } from '../icons/icons'
import Row from '../row/Row'
import Section from '../section/Section'
import styles from './Notification.module.css'

const Notification = ({ visible, setVisible }) => {
  return (
    <div className={styles.notification}>
      <Alert visible={visible} setVisible={setVisible}>
        <Section style={section}>
          <Row>
            <Column style={{ width: '1.2rem' }}>
              <div style={icon}>
                {/* <CheckCircleIcon style={{ width: '1.2rem', color: '#28D093' }} /> */}
                {/* <CheckCircleIcon style={{ width: '1.2rem', color: '#f15d0e' }} /> */}
                <CheckCircleIcon style={{ width: '1.2rem', color: '#f3722c' }} />
              </div>
            </Column>
            <Column style={{ width: 'calc(100% - 1.2rem)' }}>
              <div style={{ paddingLeft: '0.7rem' }}>
                <h3 style={title}>
                  Successfully saved!
                </h3>
                <p style={content}>
                  Anyone with a link can now view this file
                </p>
              </div>
            </Column>
          </Row>
        </Section>
      </Alert>
    </div>
  )
}

export default Notification

const section = {
  borderRadius: '0.5rem',
  background: '#fff',
  boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'
}

const icon = {
  width: '1.2rem',
  height: '1.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center'
}

const title = {
  margin: 0,
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: '1.1rem'
}

const content = {
  margin: 0, 
  fontSize: '0.8rem', 
  paddingTop: '.3rem', 
  color: '#555'
}