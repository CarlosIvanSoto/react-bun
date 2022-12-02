import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import data from '../data/custom-form.json'

interface Validations {
  type: string
  value?: number
  message?: string
}
interface Options {
  value: string | number
  label: string
}

interface FormResponse {
  type: string
  name: string
  label: string
  placeholder?: string
  value?: string
  validations?: Validations[]
  options?: Options[]
}


export const DynamicForm = () => {
  const initialValues: {[key:string]: any} = {}
  const requieredFields: {[key:string]: any} = {}

  for(const {name, value, validations} of data as FormResponse[]) {
    initialValues[name] = value
    if( !validations ) continue

    let schema = Yup.string()
    for(const {type, message, value} of validations){
      if(type === 'required')
        schema = schema.required(message || 'Required')
      if(type === 'email')
        schema = schema.email(message || 'Invalid email address')
      if(type === 'min')
        schema = schema.min(value || 1, message || 'min 1 character')
      if(type === 'max')
        schema = schema.max(value || 15, message || 'max 15 characters')
    }
    requieredFields[name] = schema
  }

  const validationSchema = Yup.object({...requieredFields})

  const onSubmit = (values: any) => {
    console.log(values)
  }
    
  return (
    <div>
      <h1>Dynamic form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {() => (
          <Form noValidate>
            {data.map(({type, name, placeholder, label, options}: FormResponse) => {
              if(type === 'text' || type === 'password' || type==='email')
                return <MyTextInput key={name} type={type as any} name={name} label={label} placeholder={placeholder}/>
              else if(type === 'select')
                return <MySelect key={name} label={label} name={name}>
                  {options?.map(({value, label}: any) => (<option key={value} value={value}>{label}</option>))}
                </MySelect>
              else if(type === 'checkbox')
              return <MyCheckbox key={name} label={label} name={name} />
              return <span> El Type: {type} no es soportado</span>
            })}

            <button type='submit'>submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
