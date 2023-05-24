import React from 'react';
import LoginFormik from '../../components/LoginFormik';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginPage = () => {

    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }

    return (
        <div>
            <LoginFormik />
            <hr></hr>
            <Button variant='outlined' onClick={register}>Register</Button>
        </div>
    );
}

export default LoginPage;
