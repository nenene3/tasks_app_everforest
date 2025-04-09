import React, { ComponentPropsWithRef, FormEvent } from 'react'

type Props = {
    children:React.ReactNode,
    onSave:(val:unknown)=>void
    
} & ComponentPropsWithRef<'form'>




const Form = ({children,onSave,...props}: Props) => {

    function handleForm(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const data = Object.fromEntries(formdata)
        onSave(data)
    }

  return (
    <form onSubmit={handleForm} {...props}>
        {children}
    </form>
  )
}

export default Form