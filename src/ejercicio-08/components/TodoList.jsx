import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import Todo from './Todo';


const TodoList = ({todos, onTodoClick}) => {
    return (
        <div>
            { todos.length > 0
                ? (<h1>Your TODOs</h1>)
                : (<h1 style={{color: 'lightslategray'}}>You have no TODOs</h1>)
            }
            <List sx={{width: '100%', maxWidth: 650, minWidth: 350}}>
                {todos.map((todo, index) => 
                    (
                        <Todo 
                            key={index}
                            {...todo}
                            onClick={()=> onTodoClick(todo.id)}
                        />
                    )
                )}
            </List>
        </div>
    );
};


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};


export default TodoList;
