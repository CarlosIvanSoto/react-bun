import { useState, ChangeEvent, FormEvent } from "react"

export const useForm = <T>(initState: T) => {

  const [formDate, setFormData] = useState({...initState})
 
  const resetForm = () => {setFormData(initState)}
  
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



  return {formDate, onChange, onSubmit, resetForm, isValidEmail}
}
