import React from 'react';
import { login, getAllUser, getAllPagedUser, getUserByID, createUser, updateUser, deleteUser } from '../../services/axiosCRUDservice';
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


const AxiosCRUDexample = () => {

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {

                if(response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failed');
                }

            })
            .catch((error) => {
                alert('Somenthing wen wrong: ', error);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'));
    }

    const initialCredentials = {
        email: '',
        password: '',
    }


    /**
     * CRUD EXAMPLES
     */

    const obtainAllUsers = () => {
        getAllUser()
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('Error, cannot obtain users');
                }
            })
            .catch((error) => {
                alert('Something went wrong: ', error);
            })
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUser(page)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('Error, cannot obtain that user');
                }
            })
            .catch((error) => {
                alert('Something went wrong: ', error);
            });
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if(response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('Error, user not found');
                }
            })
            .catch((error) => {
                alert('Something went wrong: ', error);
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('Error, user not created');
                }
            })
            .catch((error) => {
                alert('Something went wrong: ', error);
            })
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                if(response.data && response.status === 200) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('Fatal Error: cannot update user')
                }
            })
            .catch((error) => {
                alert('Something went wrong: ', error);
            })
    }

    const deleteUserById = (id) => {
        deleteUser(id)
            .then((response) => {
                if(response.status === 204) {
                    alert(`User with id ${id} deleted successfully`)
                } else {
                    throw new Error('Fatal Error: Cannot delete user')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    return (
        <div>
            <h4>Login Formik</h4>

            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit = { async (values) => {
                    authUser(values)
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


            {/* Buttons to test API responses */}
            <div>
                <button onClick={ obtainAllUsers }>Get All Users with Axios</button>
                <button onClick={ () => obtainAllPagedUsers(1) }>Get All PAged Users with Axios (in page 1)</button>
                <button onClick={ () => obtainUserByID(1) }>Get First user (with id 1)</button>
                <button onClick={ () => createNewUser('morpheus', 'leader') }>Create User</button>
                <button onClick={ () => updateUserByID(1, 'Hander', 'subleader') }>Update User</button>
                <button onClick={ () => deleteUserById(1) }>Delete User 1</button>
            </div>
        </div>
    );
}

export default AxiosCRUDexample;
