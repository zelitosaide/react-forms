import { useState } from "react"

const Select = () => {
  const [country, setCountry] = useState('')

  const handleChange = (e) => {
    console.log(e.target.name)
    setCountry(e.target.value)
  }

  return (
    <select name='country' value={country} onChange={handleChange}>
      <option value='Mozambique'>Mozambique</option>
      <option value='Portugal'>Portugal</option>
      <option value='Brasil'>Brasil</option>
      <option value='Estados Unidos'>Estados Unidos</option>
    </select>
  )
}

export default Select