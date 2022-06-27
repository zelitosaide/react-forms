import { useState } from "react"

const Onblur = () => {
  const [remove, setRemove] = useState(false)

  return (
    <div onFocus={() => setRemove(true)} style={{ height: '100vh', background: '#282c34', margin: 0 }}>
      {remove ? (
        <p style={{ margin: 0, textAlign: 'center', color: '#fefefe' }}>
          This document has focus. Click outside the document to lose focus.
        </p>
      ) : (
        <p style={{ margin: 0, textAlign: 'center', color: '#fefefe' }}>
          Click on this document to give it focus.
        </p>
      )}

      <input type='text'
        onFocus={() => {
          console.log('Hie')
        }}
        onBlur={() => {
          setRemove(false)
          
        }}
      />
    </div>
  )
}

export default Onblur