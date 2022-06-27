import { useForm } from 'react-hook-form'

import Row from './components/row/Row'
import Section from './components/section/Section'
import styles from './App.module.css'
import Container from './components/container/Container'
import Fieldset from './components/fieldset/Fieldset'

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      password: '',
      confirmPassword: '',
      country: '',
      resume: '',
      birthDate: '',
      email: '',
      curriculum: '',
      portfolio: '',
      gender: 'Female',
      pets: ['Cat', 'Dog'],
      married: true,
      sick: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <Container>
          <Row>
            <Fieldset legend='Personalia'>
              <Row label='First Name' error={errors.firstName?.message}>
                <input type='text'
                  {...register('firstName', {
                    required: 'This field is required'
                  })}
                />
              </Row>
              <Row label='Last Name' error={errors.lastName?.message}>
                <input type='text'
                  {...register('lastName', {
                    required: 'This field is required'
                  })}
                />
              </Row>
              <Row label='Age' error={errors.age?.message}>
                <input type='number'
                  {...register('age', {
                    required: 'This field is required',
                    valueAsNumber: true
                  })}
                />
              </Row>

              <Row label='Male' error={errors.gender?.message}>
                <input type='radio' value='Male' id='Male'
                  {...register('gender', {
                    required: 'This field is required',
                  })}
                />
              </Row>

              <Row label='Female' error={errors.gender?.message}>
                <input type='radio' value='Female' id='Female'
                  {...register('gender', {
                    required: 'This field is required',
                  })}
                />
              </Row>

              <Row label='Cat'>
                <input type='checkbox' value='Cat' id='Cat' {...register('pets')} />
              </Row>

              <Row label='Dog'>
                <input type='checkbox' value='Dog' id='Dog' {...register('pets')} />
              </Row>

              <Row label='Mouse'>
                <input type='checkbox' value='Mouse' id='Mouse' {...register('pets')} />
              </Row>

              <Row label='Married'>
                <input type='checkbox' id='Married' {...register('married')} />
              </Row>

              <Row label='Sick'>
                <input type='checkbox' id='Sick' value='Yes' {...register('sick')} />
              </Row>
            </Fieldset>
          </Row>


          <Row label='Select Your Country' error={errors.country?.message}>
            <select {...register('country', { required: 'This field is required' })}>
              <option value='Mozambique'>Mozambique</option>
              <option value='Brazil'>Brazil</option>
              <option value='Estados Unido'>Estados Unido</option>
              <option value='Argentina'>Argentina</option>
              <option value='Espanha'>Espanha</option>
            </select>
          </Row>


          <div className={styles.column}>
            <div style={{ float: 'left', width: '50%' }}>
              <Row label='Password' error={errors.password?.message}>
                <input type='password'
                  {...register('password', {
                    required: 'This field is required'
                  })}
                />
              </Row>
            </div>
            <div style={{ float: 'left', width: '50%' }}>
              <Row label='Confirm Password' error={errors.confirmPassword?.message}>
                <input type='password'
                  {...register('confirmPassword', {
                    required: 'This field is required'
                  })}
                />
              </Row>
            </div>
          </div>
          <Row label='Resume' error={errors.resume?.message}>
            <textarea
              {...register('resume', {
                required: 'This field is required'
              })}
            />
          </Row>
          <Row label='Birth Date' error={errors.birthDate?.message}>
            <input type='date'
              {...register('birthDate', {
                required: 'This field is required'
              })}
            />
          </Row>
          <Row label='Email' error={errors.email?.message}>
            <input type='email'
              {...register('email', {
                required: 'This field is required'
              })}
            />
          </Row>
          <Row label='Curriculum Vitae'>
            <input type='file'
              {...register('curriculum', {
                required: 'This field is required'
              })}
            />
          </Row>
          <Row label='Portfólio' error={errors.portfolio?.message}>
            <input type='url'
              {...register('portfolio', {
                required: 'This field is required'
              })}
            />
          </Row>
          <Row>
            <button type='submit'>Submit</button>
          </Row>
        </Container>
      </Section>
    </form>
  )
}

export default App
