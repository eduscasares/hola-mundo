import React from 'react';

// Bringing MODELS
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

// Bringing Formik
import { Formik, Field, Form, ErrorMessage } from 'formik';

// Bringing Yup
import * as Yup from 'yup';


const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('This field is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Thi field is required'),
            password: Yup.string()
                .required('This field is required')
                .min(8, 'Password too short'),
                //.matches(``) -> para poner una expresión regular que verificart
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false ),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Password must match')
                })
                .required('Passwords must match'),
            role: Yup.string().oneOf(
                [ROLES.USER, ROLES.ADMIN],
                'You must to select a role user'
            )
                .required('This field is required'),

        }


    )


    const submitUser = (values) => {
        alert('Register user');
    }

    return (
        <div>
            <h4>Register Formik</h4>

            <Formik
                initialValues = { initialValues }
                validationSchema = { registerSchema }
                onSubmit = {async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values, 
                        touched, 
                        errors, 
                        isSubmitting, 
                        handleSubmit, 
                        handleBlur}) => (
                            <Form>

                                <label htmlFor="username">Username</label>
                                <Field type="text" name="username" id="username" placeholder="John Doe"/>
                                {/* Setting Field Errors */}
                                {

                                    errors.username && touched.username &&
                                    (
                                        <ErrorMessage name="username" component='div'></ErrorMessage>
                                    )

                                }


                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" id="email" placeholder="johndoe@mail.com"/>
                                {/* Setting Field Errors */}
                                {

                                    errors.email && touched.email &&
                                    (
                                        <ErrorMessage name="email" component='div'></ErrorMessage>
                                    )

                                }

                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" id="password" placeholder="Password"/>
                                {/* Setting Field Errors */}
                                {
                                 
                                    errors.password && touched.password &&
                                    (
                                        <ErrorMessage name="password" component='div'></ErrorMessage>
                                    )

                                }

                                <label htmlFor="confirm">Confirm your password</label>
                                <Field type="password" name="confirm" id="confirm" placeholder="Confirm your password"/>
                                {/* Setting Field Errors */}
                                {
                                 
                                    errors.confirm && touched.confirm &&
                                    (
                                        <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                    )

                             }

                                <button type='submit'>Register Account</button>
                                {isSubmitting ? (<p>Sending your credential</p>) : null}

                            </Form>
                        )}


            </Formik>
        </div>
    );
};



export default RegisterFormik;
