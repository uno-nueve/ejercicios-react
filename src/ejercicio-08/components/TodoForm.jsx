import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material'
import { AddCircle  } from '@mui/icons-material'


const TodoForm = ({submit}) => {

    const newtext = useRef()

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newtext.current.value);
                newtext.current.value = '';
            }}>
                <Box
                    sx={{
                        minWidth: '500px',
                        display: 'flex',
                        flex: 1,
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}
                >
                    <TextField 
                        inputRef={newtext} 
                        sx={{ 
                            input: {color: 'white'}, 
                            label: {color: 'slategray'}, 
                            minWidth: '400px', 
                            marginRight: '20px' 
                        }} 
                        variant='filled' 
                        color='info' 
                        label='Create your TODOs' 
                    />
                    <Button 
                        type='submit' 
                        variant='outlined' 
                        color='info' 
                    >
                        <AddCircle />
                    </Button>
                </Box>
            </form>
        </div>
    );
};


TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default TodoForm;
