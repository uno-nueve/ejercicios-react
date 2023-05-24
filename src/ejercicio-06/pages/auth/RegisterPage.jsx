import React from 'react';
import RegisterFormik from '../../components/RegisterFormik';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const RegisterPage = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    return (
        <div>
            <RegisterFormik />
            <hr></hr>
            <Button variant='outlined' onClick={login}>Login</Button>
        </div>
    );
}

export default RegisterPage;
