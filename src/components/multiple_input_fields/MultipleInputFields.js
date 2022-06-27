import { useState } from 'react'

const MultipleInputFields = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    for (let item of data) {
      console.log(item)
    }

    setInputs({})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Enter your name:</label>
      <input
        type='text'
        name='username'
        value={inputs.username || ''}
        onChange={handleChange}
      />

      <label htmlFor='age'>Enter your age:</label>
      <input 
        type='number'
        name='age'
        value={inputs.age || ''}
        onChange={handleChange}
      />

      <input type='submit' />
    </form>
  )
}

export default MultipleInputFields