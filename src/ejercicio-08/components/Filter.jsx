import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';


const Filter = ({active, onClick, children}) => {

    if (active) {
        return (<span className='active'>{children}</span>)
    }

    return (
        <Button
            className='filter'
            onClick={
                (e) => {
                    e.preventDefault();
                    onClick();
                }
            }
            variant='contained'
            color='info'
        >
            {children}
        </Button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};


export default Filter;
