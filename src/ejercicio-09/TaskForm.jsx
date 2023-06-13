import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskListApp';
import { Button, TextField, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

const TaskForm = ({ onAddTask, count }) => {
    const dispatch = useContext(TaskContext)
    const [text, setText] = useState('');

    const handleInputChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        onAddTask(text)
        setText('')
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    width: '500px',
                    display: 'flex',
                    flex: 1,
                    marginTop: '30px',
                    marginBottom: '30px'
                }}
            >
                <TextField
                    label='ADD TASK'
                    value={text} 
                    onChange={handleInputChange}
                    variant='outlined'
                    color='warning'
                    focused
                    sx={{ 
                        input: {color: 'white'}, 
                        label: {color: 'slategray'},
                        minWidth: '400px', 
                        marginRight: '20px',
                        marginLeft: '20px'
                    }}
                />
                <Button 
                    type='submit'
                    variant='contained'
                    color='warning'
                >
                    <Add />
                </Button>
            </Box>
        </form>
    );
}

export default TaskForm;

