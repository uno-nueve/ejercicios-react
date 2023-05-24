import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    return (
        <div>
            <h4>Login</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                onSubmit={async (values) => {
                    await new Promise (r => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credential', values);
                    navigate('/tasks')
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field 
                            id='email' 
                            type='email' 
                            name='email' 
                            placeholder='example@email.com' 
                            className='form-control form-control-md' 
                        />

                        {
                            errors.email && touched.emial && 
                            (
                                <ErrorMessage name='email' component='div' />
                            )
                        }

                        <label htmlFor='password'>Password</label>
                        <Field 
                            id='password' 
                            type='password' 
                            name='password' 
                            placeholder='*****' 
                            className='form-control form-control-md' 
                        />

                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='email' component='div' />
                            )
                        }

                        <Button type='submit' variant='contained' className='mt-3'>Login</Button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginFormik;
