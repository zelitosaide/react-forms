// import { Routes, Route } from 'react-router-dom'
// // import Onblur from './components/events/Onblur'
// import Layout from './routes/Layout'
// import About from './routes/About'
// import Home from './routes/Home'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='about' element={<About />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

import { useForm } from 'react-hook-form'

import Row from './components2/row/Row'
import Section from './components2/section/Section'
import Column from './components2/column/Column'
import Input from './components2/input/Input'
import Fieldset from './components2/fieldset/Fieldset'
import Dialog from './components2/dialog/Dialog'
import { useState } from 'react'

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      height: '',
      gender: '',
      otherGender: '',
      rememberMe: false,
      sameShippingAddress: false,
      shippingCountry: '',
      shippingAddress: '',
      shippingZipCode: '',
      billingCountry: '',
      billingAddress: '',
      billingZipCode: '',
      favouriteFruit: [],
      academicCategory: '',
      email: '',
    }
  })
  const [visible, setVisible] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
  }

  const gender = watch('gender')
  const password = watch('password')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <Section style={{ background: '#fff' }}>
          <Row>
            <Column style={{ width: '50%' }}>
              <Input label='First Name' error={errors.firstName?.message}>
                <input type='text'
                  {...register('firstName', {
                    required: 'This field is required'
                  })}
                />
              </Input>
            </Column>
            <Column style={{ width: '50%' }}>
              <Input label='Last Name' error={errors.lastName?.message}>
                <input type='text'
                  {...register('lastName', {
                    required: 'This field is required'
                  })}
                />
              </Input>
            </Column>
          </Row>
          <Row>
            <Column style={{ width: '25%' }}>
              <Input label='Password' error={errors.password?.message}>
                <input type='password'
                  {...register('password', {
                    required: 'This field is required'
                  })}
                />
              </Input>
            </Column>
            <Column style={{ width: '25%' }}>
              <Input label='Confirm Password' error={errors.confirmPassword?.message}>
                <input type='password'
                  {...register('confirmPassword', {
                    required: 'This field is required',
                    validate: (value) => {
                      return value === password || 'Password does not match'
                    }
                  })}
                />
              </Input>
            </Column>
            <Column style={{ width: '25%' }}>
              <Input label='Birth Date' error={errors.birthDate?.message}>
                <input type='date'
                  {...register('birthDate', {
                    required: 'This field is required'
                  })}
                />
              </Input>
            </Column>
            <Column style={{ width: '25%' }}>
              <Input label='Height' error={errors.height?.message}>
                <input type='number'
                  {...register('height', {
                    required: 'This field is required'
                  })}
                />
              </Input>
            </Column>
          </Row>

          <Row>
            <Column style={{ width: '50%' }}>
              <Fieldset label='Choose your favourite fruit' error={errors.favouriteFruit?.message}>
                <Input label='Honeydew Melon'>
                  <input type='checkbox' id='Honeydew Melon'
                    value='Honeydew Melon'
                    {...register('favouriteFruit', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Banana'>
                  <input type='checkbox' id='Banana'
                    value='Banana'
                    {...register('favouriteFruit', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Strawberry'>
                  <input type='checkbox' id='Strawberry'
                    value='Strawberry'
                    {...register('favouriteFruit', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Custard-Apple'>
                  <input type='checkbox' id='Custard-Apple'
                    value='Custard-Apple'
                    {...register('favouriteFruit', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Date Fruit'>
                  <input type='checkbox' id='Date Fruit'
                    value='Date Fruit'
                    {...register('favouriteFruit', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Fieldset>
            </Column>

            <Column style={{ width: '50%' }}>
              <Fieldset label='Categoria Académica' error={errors.academicCategory?.message}>
                <Input label='Professor Catedrático'>
                  <input type='radio' id='Professor Catedrático'
                    value='Professor Catedrático'
                    {...register('academicCategory', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Professor Associado'>
                  <input type='radio' id='Professor Associado'
                    value='Professor Associado'
                    {...register('academicCategory', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Professor Auxiliar'>
                  <input type='radio' id='Professor Auxiliar'
                    value='Professor Auxiliar'
                    {...register('academicCategory', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Assistente'>
                  <input type='radio' id='Assistente'
                    value='Assistente'
                    {...register('academicCategory', {
                      required: 'This field is required'
                    })}
                  />
                </Input>

                <Input label='Assistente Estagiário'>
                  <input type='radio' id='Assistente Estagiário'
                    value='Assistente Estagiário'
                    {...register('academicCategory', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Fieldset>
            </Column>
          </Row>

          <Input label='Email' error={errors.email?.message}>
            <input type='email' id='Email'
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  // value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  value: /^\S+@\S+\.\S+$/i,
                  message: 'Invalid Email'
                }
              })}
            />
          </Input>

          <Input label='Gender' error={errors.gender?.message}>
            <div>
              <Input label='Male' style={{ display: 'inline-block', padding: '0.5rem 0 0' }}>
                <input type='radio' value='Male' id='Male'
                  {...register('gender', {
                    required: 'This field is required'
                  })}
                />
              </Input>

              <Input label='Female' style={{ display: 'inline-block', paddingBottom: 0 }}>
                <input type='radio' value='Female' id='Female'
                  {...register('gender', {
                    required: 'This field is required'
                  })}
                />
              </Input>

              <Input label='Other' style={{ display: 'inline-block', paddingBottom: 0 }}>
                <input type='radio' value='Other' id='Other'
                  {...register('gender', {
                    required: 'This field is required'
                  })}
                />
              </Input>
            </div>
          </Input>


          <Input
            style={{ display: gender === 'Other' ? 'block' : 'none' }}
            label='Specify the other' error={errors.otherGender?.message}
          >
            <input type='text' id='Specify the other'
              {...register('otherGender', {
                required: 'This field is required'
              })}
            />
          </Input>

          <Fieldset label='Sign in to your account'>
            <Row>
              <Column style={{ width: '50%' }}>
                <Input label='Remember me' error={errors.rememberMe?.message}>
                  <input type='checkbox' id='Remember me'
                    {...register('rememberMe', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
              <Column style={{ width: '50%' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    textAlign: 'right',
                    color: '#f3722c',
                    fontSize: '0.95rem',
                  }}
                >
                  Forgot your password?
                </div>
              </Column>
            </Row>
          </Fieldset>

          <br />
          <Fieldset label='Shipping address'>
            <Row>
              <Column style={{ width: '40%' }}>
                <label
                  style={{ display: 'block', padding: '0.5rem', color: '#333', cursor: 'pointer' }}
                  htmlFor='Shipping Country:'
                >
                  Country:
                </label>
              </Column>

              <Column style={{ width: '60%' }}>
                <Input error={errors.shippingCountry?.message} style={{ paddingBottom: '0.8rem' }}>
                  <input type='text' style={{ height: '2rem' }} id='Shipping Country:'
                    {...register('shippingCountry', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
            </Row>

            <Row>
              <Column style={{ width: '40%' }}>
                <label
                  style={{ display: 'block', padding: '0.5rem', color: '#333', cursor: 'pointer' }}
                  htmlFor='Shipping Address:'
                >
                  Address:
                </label>
              </Column>
              <Column style={{ width: '60%' }}>
                <Input error={errors.shippingAddress?.message} style={{ paddingBottom: '0.8rem' }}>
                  <input type='text' style={{ height: '2rem' }} id='Shipping Address:'
                    {...register('shippingAddress', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
            </Row>

            <Row>
              <Column style={{ width: '40%' }}>
                <label
                  style={{ padding: '0.5rem', color: '#333', display: 'block', cursor: 'pointer' }}
                  htmlFor='Shipping Zip/postal code:'
                >
                  Zip/postal code:
                </label>
              </Column>
              <Column style={{ width: '60%' }}>
                <Input error={errors.shippingZipCode?.message} style={{ paddingBottom: '0.8rem' }}>
                  <input type='text' id='Shipping Zip/postal code:'
                    style={{ height: '2rem' }}
                    {...register('shippingZipCode', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
            </Row>
          </Fieldset>

          <br />
          <Fieldset label='Billing address'>
            <Row>
              <Column style={{ width: 'calc(100% - 2rem)' }}>
                <label htmlFor='Same as shipping address'
                  style={{ padding: '0.5rem', display: 'block', color: '#333' }}
                >Same as shipping address:
                </label>
              </Column>
              <Column style={{ width: '2rem' }}>
                <Input style={{ textAlign: 'right' }}>
                  <input type='checkbox' id='Same as shipping address'
                    {...register('sameShippingAddress')}
                  />
                </Input>
              </Column>
            </Row>

            <br />
            <Row>
              <Column style={{ width: '40%' }}>
                <label
                  style={{ padding: '0.5rem', display: 'block', color: '#333', cursor: 'pointer' }}
                  htmlFor='Billing Country:'
                >
                  Country:
                </label>
              </Column>

              <Column style={{ width: '60%' }}>
                <Input error={errors.billingCountry?.message} style={{ paddingBottom: '0.8rem' }}>
                  <input type='text' id='Billing Country:'
                    style={{
                      background: 'white',
                      height: '2rem'
                    }}
                    {...register('billingCountry', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
            </Row>

            <Row>
              <Column style={{ width: '40%' }}>
                <label
                  style={{ padding: '0.5rem', display: 'block', color: '#333', cursor: 'pointer' }}
                  htmlFor='Billing Address:'
                >
                  Address:
                </label>
              </Column>

              <Column style={{ width: '60%' }}>
                <Input style={{ paddingBottom: '0.8rem' }} error={errors.billingAddress?.message}>
                  <input type='text' id='Billing Address:'
                    style={{
                      background: 'white',
                      height: '2rem'
                    }}
                    {...register('billingAddress', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
            </Row>

            <Row>
              <Column style={{ width: '40%' }}>
                <label
                  style={{ padding: '0.5rem', display: 'block', color: '#333', cursor: 'pointer' }}
                  htmlFor='Billing Zip/postal code:'
                >
                  Zip/postal code:
                </label>
              </Column>

              <Column style={{ width: '60%' }}>
                <Input style={{ paddingBottom: '0.8rem' }} error={errors.billingZipCode?.message}>
                  <input type='text' id='Billing Zip/postal code:'
                    style={{
                      background: 'white',
                      height: '2rem'
                    }}
                    {...register('billingZipCode', {
                      required: 'This field is required'
                    })}
                  />
                </Input>
              </Column>
            </Row>
          </Fieldset>

          <Input>
            <button type='submit'>submit</button>
          </Input>


          <Fieldset label='Modal'>
            <Input>
              <button onClick={() => setVisible(true)} type='button'>Open Modal</button>
            </Input>
            <Dialog
              visible={visible}
              setVisible={setVisible}
              type='warn'
              // backdrop
            />
          </Fieldset>
        </Section>
      </Section>
    </form >
  )
}

export default App