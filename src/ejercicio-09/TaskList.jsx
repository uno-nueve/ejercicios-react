import React, { useContext } from 'react';
import { TaskContext, SET_ACTIVE, SET_COMPLETE } from './TaskListApp';
import { List, ListItem, ListItemText, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { Delete } from '@mui/icons-material'
import { deepOrange } from '@mui/material/colors'

// TASK COMPONENT
const Task = ({ task, onDelete }) => {
    const dispatch = useContext(TaskContext);

    const handleChange = () => {
        dispatch({
            id: task.id,
            type: task.complete ? SET_ACTIVE : SET_COMPLETE
        })
    }

    return(
        <List sx={{width: '100%', maxWidth: 600, minWidth: 350}}>
            <ListItem 
                key={task.id} 
                style={
                    {
                        textDecoration: task.complete ? 'line-through' : 'none',
                        textDecorationColor: task.complete ? 'tomato' : 'none',
                        color: task.complete ? 'grey' : '#605B56',
                        backgroundColor: task.complete ? 'rgba(20, 20, 20, 0.7)' : 'rgba(242, 251, 224)',
                        marginTop: '10px',
                        borderRadius: '15px'
                    }
                }
            >
                <FormControlLabel control={
                    <Checkbox 
                        checked={task.complete}
                        onChange={handleChange}
                        sx={{
                                color: deepOrange[800],
                                '&.Mui-checked': {
                                    color: deepOrange[600],
                                }
                        }}
                    />
                } 
                />
                    <ListItemText primary={`${ task.text }`} />
                <IconButton 
                    onClick={() => onDelete(task.id)} 
                    variant='contained'
                    color='warning'
                >
                    <Delete />
                </IconButton>
            </ListItem>
        </List>
    )
}

// TASK LIST COMPONENT
const TaskList = ({ tasks, onDeleteTask }) => {

    return (
        <ul>
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDeleteTask} 
                />
            ))}
        </ul>
    );
}

export default TaskList;
