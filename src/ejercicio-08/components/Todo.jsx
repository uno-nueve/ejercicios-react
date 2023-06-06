import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Switch } from '@mui/material';


const Todo = ({text, id, onClick, completed}) => {
    return (
        <ListItem 
            style={
                {
                    textDecoration: completed ? 'line-through' : 'none',
                    textDecorationColor: completed ? 'tomato' : 'none',
                    color: completed ? 'grey' : 'white',
                    backgroundColor: completed ? 'rgba(20, 20, 20, 0.7)' : 'rgba(86, 152, 184, 0.7)',
                    marginTop: '10px',
                    borderRadius: '15px'
                }
            }
        >
            <ListItemText id={id} primary={`${id + 1} - ${text}`} />
            <Switch edge='end' onClick={onClick} color='warning'/>
        </ListItem>
    );
};


Todo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired
};


export default Todo;
