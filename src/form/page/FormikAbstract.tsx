import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckBox, MyTextInput, MySelect  } from '../components'

import '../styles/styles.css'


export const FormikAbstract = () => {     
   
  
  return (
    <div>
        <h1>Formik Abstract</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email:'',
            terms:false,
            jobType:''
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={Yup.object({
                firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                lastName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                email: Yup.string()
                                    .email('No es un email valido')
                                    .required('Requerido'),
                jodType: Yup.string()
                                    .required('Requerido'),
                terms:   Yup.boolean()
                                    .oneOf([true], 'Debe aceptar las condiciones')
          })}
        >

          {
            (formik) => (
              <Form>  
                <MyTextInput label="firstName" name="firstName" type="text" placeholder="First Name" /> 
                <MyTextInput label="lastName" name="lastName" type="text" placeholder="Last Name" />     
                <MyTextInput label="email" name="email" type="email" placeholder="Email" />               
                             
                <MySelect label="Job Type" name="jodType">
                  <option value="">Pick something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-junior">IT Junior</option>
                </MySelect>

                <MyCheckBox label="Terms and conditions"  name="terms"/>         
             
               <button type='submit'>Submit</button>  
          </Form>

            )
          }          
        </Formik>
       
    </div>
  )
}

