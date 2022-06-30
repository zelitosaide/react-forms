import Input from '../input/Input'

const OutlineButton = () => {
  return (
    <Input>
      <button
        type='button'
        style={{ background: '#fff', color: '#333', border: '1px solid #ccc' }}
      >
        Outline
      </button>
    </Input>
  )
}

export default OutlineButton