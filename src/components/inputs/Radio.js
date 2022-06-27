import { useState } from 'react'

const Radio = () => {
  const [gender, setGender] = useState('Male')
  const [developer, setDeveloper] = useState('Yes')

  const handleChange = (e) => setGender(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    console.log('Gender', data.get('gender'))
    console.log('Developer', data.get('developer'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='Male'>Male</label>
      <input
        id='Male'
        type='radio'
        value='Male'
        name='gender'
        checked={gender === 'Male'}
        onChange={handleChange}
      />

      <label htmlFor='Female'>Female</label>
      <input
        id='Female'
        type='radio'
        value='Female'
        name='gender'
        checked={gender === 'Female'}
        onChange={handleChange}
      />

      <label htmlFor='Yes'>Yes</label>
      <input 
        id='Yes'
        type='radio'
        name='developer'
        value='Yes'
        checked={developer === 'Yes'}
        onChange={(e) => setDeveloper(e.target.value)}
      />

      <label htmlFor='No'>No</label>
      <input 
        id='No'
        type='radio'
        name='developer'
        value='No'
        checked={developer === 'No'}
        onChange={(e) => setDeveloper(e.target.value)}
      />

      <input type='submit' />
    </form>
  )
}

export default Radio