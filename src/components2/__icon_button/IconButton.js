import { TimesIcon } from '../icons/icons'
import Input from '../input/Input'

const Button = ({ ...props }) => {
  return (
    <Input style={{ '--bgColor': '#fff', '--bgHover': '#E9E9ED', '--bgActive': '#DDDDDD' }}>
      <button
        {...props}
        type='button'
        style={{
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          outline: 0,
          width: '1.2rem',
          height: '1.2rem',
          color: '#555'
        }}
      >
        <TimesIcon style={{ width: '1rem' }} />
      </button>
    </Input>
  )
}

export default Button