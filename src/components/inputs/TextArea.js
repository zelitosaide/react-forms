import { useState } from 'react'


const TextArea = () => {
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
    console.log(e.target.value)
  }

  return (
    <textarea
      value={content}
      onChange={handleChange}
    />
  )
}

export default TextArea