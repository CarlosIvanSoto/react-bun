import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { MyTextInput} from '../components'
import '../styles/styles.css'


export const RegisterFormik = () => {
  return (
    <div>
    <h1>Register Formik Page</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        reapPassword: ''
      }}
      onSubmit={(values) => {console.log(values)}}
      validationSchema={
        Yup.object({
          name: Yup.string().min(2, 'Minimum 2 characters').max(15, 'Must be 15 characters or less').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
          reapPassword: Yup.string().min(6, 'Minimum 6 characters').equals([Yup.ref('password')], 'The passwords do not match').required('Required')
        })
      } >
      {
        ({handleReset}) => (
          <Form >
            <MyTextInput label='Nickname' name='name' placeholder='Name'/>
            <MyTextInput label='Email Address' name='email' type='email' placeholder='email@email.com'/>
            <MyTextInput label='Password' name='password' type='password' placeholder='password'/>
            <MyTextInput label='Reapead Password' name='reapPassword' type='password' placeholder='Reapeat password'/>

            <button type='submit'>submit</button>
            <button type='button' onClick={handleReset}>Reset Form</button>
          </Form>
        )
      }
    </Formik>
    </div>
  )
}
