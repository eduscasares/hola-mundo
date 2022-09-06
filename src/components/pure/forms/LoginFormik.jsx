import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('This field is required'),
        password: Yup.string()
            .required('This field is required'),
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }

    const navigate = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>

            <Formik
            initialValues = { initialCredentials }
            validationSchema = { loginSchema }
            onSubmit = { async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                // alert(JSON.stringify(values, null, 2));

                // Saving credentials in the local storage
                await localStorage.setItem('credentials', values);

                navigate('/profile');
            }}
            >

                {/* Obtaining props from Formik */}

                {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <Form>

                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" placeholder="example@email.com" />

                            {
                                errors.email && touched.email && (
                                    // <div className='error'>
                                    //     <p>{ errors.email }</p>
                                    // </div>
                                    <ErrorMessage name="email" component='div' />
                                )
                            }

                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" id="password" placeholder="password" />

                            {
                                errors.password && touched.password && (
                                    // <div className='error'>{ errors.password }</div>
                                    <ErrorMessage name="password" component='div'/>
                                )
                            }

                        <button type="submit">Login</button>

                        { isSubmitting ? (<p>Your credentials...</p>) : null }
                        
                    </Form>
                )}
            
            </Formik>
        </div>
    );
}

export default LoginFormik;
