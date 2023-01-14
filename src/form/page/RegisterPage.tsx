import { useForm } from "../hooks/useForm"


export const RegisterPage = () => {

  const { formData, 
          onChange, 
          name, 
          email,
          password1, 
          password2, 
          resetForm,
          isValidEmail
        } = useForm({
                    name:'',
                    email:'',
                    password1:'',
                    password2:''
        });

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ onSubmit } >
            <input 
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={ onChange}
            className={`${ name.trim().length <= 0 && 'has-error' }`}
             />
             { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input 
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={ onChange}
            className={`${ !isValidEmail(email) && 'has-error' }`}
             />
              { !isValidEmail(email)  && <span>Este email no es valido</span>}

        <input 
            name="password1"
            type="password"
            placeholder="Password"
            value={password1}
            onChange={ onChange}
            className={`${ password1.trim().length <= 0 && 'has-error' }`}
             />
             { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
             { password1.trim().length <  6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 caracteres </span>}

        <input 
            name="password2"
            type="password"
            placeholder="Repet Password"
            value={password2}
            onChange={ onChange}
            className={`${ password2.trim().length <= 0 && 'has-error' }`}
             />
             { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
             { password2.trim().length > 0 && password2 !== password1  && <span>Las contraseña debe ser igual</span>}


             <button type='submit'>Create</button>
             <button type='button' onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}

