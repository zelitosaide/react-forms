import { useState } from 'react'

import Modal from '../components2/modal/Modal'

const Home = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ paddingTop: '50px' }}>
      <button onClick={() => setVisible(true)}>Open Modal</button>

      <Modal visible={visible} setVisible={setVisible}>
        <h1>Ola</h1>
      </Modal>
    </div>
  )
}

export default Home