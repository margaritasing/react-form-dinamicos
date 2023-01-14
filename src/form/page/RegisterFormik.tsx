import { Form, Formik } from "formik"
import { useForm } from "../hooks/useForm"
import * as Yup from 'yup'
import { MyTextInput } from "../components"



export const RegisterFormik = () => {


             /*  name:'',
              email:'',
              password1:'',
              password2:'' */
 


return (
<div>
<h1>Register Formit Page</h1>
  <Formik
    initialValues={{
      name:'',
      email:'',
      password1:'',
      password2:''    
     }}
     onSubmit ={ (values) => {
        console.log(values)
     }}
    validationSchema={
       Yup.object({
        name: Yup.string()
              .min(2, 'Nombre debe contener mas de dos letras')
              .max(15, 'El nombre no puede tener mas de 15 letras')
              .required('Requerido'),
        email: Yup.string()
              .email('No es un email valido')
              .required('Requerido'),      
        password1:Yup.string()
              .required('Requerido')
              .min(6, 'La contraseña debe tener minimo 6 caracteres'),
        password2:Yup.string()
              .required('Requerido')
              .min(6, 'La contraseña debe tener minimo 6 caracteres')
              .oneOf([Yup.ref('password1') ], 'las contraseñas no son iguales')
       })
    }
     >
      {
        ({handleReset }) => (
          <Form>
            <MyTextInput
             label="Nombre"
             name="name"
             placeholder="Nombre"
             />
             <MyTextInput
             label="Correo"
             name="email"
             placeholder="Correo"
             />
             <MyTextInput
             label="Password"
             type="password"
             name="password1"
             placeholder="Contraseña"
             />
             <MyTextInput
             label="Confirmar Password"
             type="password"
             name="password2"
             placeholder="Confirmar Contraseña"
             />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>Reset</button>
          </Form>
        )}
    


  </Formik>
 

  
</div>
)
}

