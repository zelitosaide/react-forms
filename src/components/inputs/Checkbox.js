import { useState } from 'react'

const Checkbox = () => {
  // Primeiro use case
  const [pets, setPets] = useState(['Cat', 'Mouse', 'Dog'])
  // Segundo use case
  const [keepSigned, setKeepSigned] = useState('')
  // Terceiro use case (similar ao segundo, apenas muda o tipo de variavel)
  const [married, setMarried] = useState(false)
  // Quarto use case (similar ao terceiro, usa o propriedade checked para actualizar o estado)
  const [sick, setSick] = useState(true)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(pets)
    console.log(keepSigned)
    console.log(married)
    console.log(sick)

    // Teste de Iterators
    const data = new FormData(e.target)
    let values = data.values()
    let a = values.next()

    while (!a.done) {
      a = values.next()
    }

    for (let v of data) {
      console.log(v)
    }
  }

  const handleChange = (e) => {
    const aux = pets.find(pet => pet === e.target.value)
    if (!aux) {
      setPets(prev => [...prev, e.target.value])
    } else {
      setPets(prev => prev.filter(pet => pet !== aux))
    }
  }

  const handleChange2 = (e) => {
    if (!!keepSigned) {
      setKeepSigned('')
    } else {
      setKeepSigned(e.target.value)
    }
  }

  const handleChange3 = () => {
    setMarried(prev => !prev)
  }

  const handleChange4 = (e) => {
    setSick(e.target.checked)
  }

  const handleChecked = (value) => {
    return pets.includes(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='Cat'>Cat</label>
      <input
        id='Cat'
        name='pets'
        type='checkbox'
        value='Cat'
        onChange={handleChange}

        checked={handleChecked('Cat')}
      />

      <label htmlFor='Dog'>Dog</label>
      <input
        id='Dog'
        name='pets'
        type='checkbox'
        value='Dog'
        onChange={handleChange}

        checked={handleChecked('Dog')}
      />

      <label htmlFor='Mouse'>Mouse</label>
      <input
        id='Mouse'
        name='pets'
        type='checkbox'
        value='Mouse'
        onChange={handleChange}

        checked={handleChecked('Mouse')}
      />

      <label htmlFor='signed'>keep Signed</label>
      <input
        id='signed'
        name='signed'
        type='checkbox'
        value='Yes'
        onChange={handleChange2}
      />

      <label htmlFor='married'>Married</label>
      <input 
        id='married'
        name='married'
        type='checkbox'
        value='married'
        onChange={handleChange3}
      />

      <label htmlFor='sick'>Sick</label>
      <input 
        id='sick'
        name='sick'
        type='checkbox'
        value='sick'
        onChange={handleChange4}

        checked={sick}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Checkbox