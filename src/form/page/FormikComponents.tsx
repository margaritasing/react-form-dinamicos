import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


export const FormikComponents = () => {     
   
  
  return (
    <div>
        <h1>Formik Yup Tutorial</h1>

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
              <Field name="firstName" type="text" placeholder="First Name"  />
              <ErrorMessage name="firstName" component="span" />   

              <Field name="lastName" type="text" placeholder="Last Name"/>        
              <ErrorMessage name="lastName" component="span" />    

              <Field name="email" type="email" placeholder="Email"/>          
              <ErrorMessage name="email" component="span" />  

              <label htmlFor="jodType">Job Type</label>
              <Field name="jodType" as="select" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </Field>
              <ErrorMessage name="jodType" component="span" />  


              <label>
                Terms and conditions
              <Field name="terms" type="checkbox"/>          
                </label>
              <ErrorMessage name="terms" component="span" />  
  
               <button type='submit'>Submit</button>  
          </Form>

            )
          }          
        </Formik>
       
    </div>
  )
}

