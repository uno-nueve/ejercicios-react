import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

// Models
import { User } from '../components/user.class';
import { ROLES } from '../components/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialRegister = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username is too short')
                .max(12, 'Username is too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password is too short')
                .required('Pasword is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                    }
                )
                .required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('register user');
    }

    return (
        <div>
            <h4>Register</h4>
            <Formik
                initialValues={initialRegister}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise (r => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <label htmlFor='username'>Username</label>
                        <Field 
                            id='username' 
                            type='text' 
                            name='username' 
                            placeholder='Your username' 
                            className='form-control form-control-md' 
                        />

                        {
                            errors.username && errors.username && 
                            (
                                <ErrorMessage name='username' component='div' />
                            )
                        }

                        <label htmlFor='email'>Email</label>
                        <Field 
                            id='email' 
                            type='email' 
                            name='email' 
                            placeholder='example@email.com' 
                            className='form-control form-control-md' 
                        />

                        {
                            errors.email && touched.email && 
                            (
                                <ErrorMessage name='email' component='div' />
                            )
                        }

                        <label htmlFor='password'>Password</label>
                        <Field 
                            id='password' 
                            type='password' 
                            name='password' 
                            placeholder='Password' 
                            className='form-control form-control-md' 
                        />

                        {
                            errors.password && touched.password && 
                            (
                                <ErrorMessage name='password' component='div' />
                            )
                        }

                        <label htmlFor='password'>Confirm Password</label>
                        <Field 
                            id='confirm' 
                            type='password' 
                            name='confirm' 
                            placeholder='Confirm your password' 
                            className='form-control form-control-md' 
                        />

                        {
                            errors.password && touched.password && 
                            (
                                <ErrorMessage name='confirm' component='div' />
                            )
                        }

                        <Button type='submit' variant='contained' className='mt-3' >Register Account</Button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
