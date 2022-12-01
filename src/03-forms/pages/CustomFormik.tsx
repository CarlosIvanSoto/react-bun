import React from 'react';
import { Formik , Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const CustomFormik = () => {
  
  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {console.log(values)}}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required('Required')
          })
        } >
        {
          formik => (
            <Form >
              <label htmlFor="firstName">First Name</label>
              <Field name='firstName' type='text'/>
              <ErrorMessage name='firstName' component='span'/>
              <label htmlFor="lastName">Last Name</label>
              <Field name='lastName' type='text'/>
              <ErrorMessage name='lastName' component='span'/>
              <label htmlFor="email">Email Address</label>
              <Field name='email' type='text'/>
              <ErrorMessage name='email' component='span'/>
              <label htmlFor='jobType' >Job Type</label>
              <Field name='jobType' as='select'>
                <option value='' >Pick somthing</option>
                <option value='developer' >Developer</option>
                <option value='designer' >Designer</option>
                <option value='it-senior' >IT Senior</option>
                <option value='it-jr' >IT Jr</option>
              </Field>
              <ErrorMessage name='jobType' component='span'/>

              <label >
                <Field name='terms' type='checkbox'/>
                terminos y condiciones
              </label>
              <ErrorMessage name='terms' component='span'/>

              <button type='submit'>submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
    // <form onSubmit={formik.handleSubmit}>
    //   <label htmlFor="firstName">First Name</label>
    //   <input
    //     id="firstName"
    //     type="text"
    //     {...formik.getFieldProps('firstName')}
    //   />
    //   {formik.touched.firstName && formik.errors.firstName 
    //     ? (<div>{formik.errors.firstName}</div>) 
    //     : null}

    //   <label htmlFor="lastName">Last Name</label>
    //   <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
    //   {formik.touched.lastName && formik.errors.lastName ? (
    //     <div>{formik.errors.lastName}</div>
    //   ) : null}

    //   <label htmlFor="email">Email Address</label>
    //   <input id="email" type="email" {...formik.getFieldProps('email')} />
    //   {formik.touched.email && formik.errors.email ? (
    //     <div>{formik.errors.email}</div>
    //   ) : null}

    //   <button type="submit">Submit</button>
    // </form>
  )
}