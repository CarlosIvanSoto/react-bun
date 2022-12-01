import React from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'


export const Register = () => {
  const {onChange,onSubmit,formDate, resetForm, isValidEmail} = useForm({
    name: '',
    email: '',
    password: '',
    reapPassword: '',
  })
  const {name, email, password, reapPassword} = formDate
  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={ onSubmit } noValidate>
        <input className={`${name.trim().length <= 0 && 'has-error'}`} name='name' type='text' placeholder='Name' value={name} onChange={onChange}/>
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input className={`${!isValidEmail(email) && 'has-error'}`} name='email' type='email' placeholder='Email' value={email} onChange={onChange}/>
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input name='password' type='password' placeholder='Password' value={password} onChange={onChange}/>
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña tiene que tener mas de 6 caracteres</span>}
        <input name='reapPassword' type='password' placeholder='Reapeat password' value={reapPassword} onChange={onChange}/>
        {reapPassword.trim().length <= 0 && <span>Este campo es necesario</span>}
        {reapPassword.trim().length > 0 && password !== reapPassword && <span>Las contraseñas deben de ser iguales</span>}
        <button type='submit'>Create</button>
        <button type='button' onClick={() => resetForm()}>Reset Form</button>
      </form>
    </div>
  )
}
