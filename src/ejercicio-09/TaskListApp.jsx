import React, { useReducer, useContext, createContext } from 'react';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import { Typography } from '@mui/material';

// ACTIONS
export const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const INPUT_CHANGE = 'INPUT_CHANGE';
export const SET_ACTIVE = 'SET_ACTIVE'; 
export const SET_COMPLETE = 'SET_COMPLETE'; 

// INITIAL STATE
let count = 0;
const initialTasks = [];

// REDUCERS
const tasksReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return state.map(task => {
                if (task.id === action.task.id) {
                    return action.task
                } else {
                    return task
                }
            })
        case ADD_TASK:
            return [...state, {
                id: action.id,
                text: action.text,
                complete: false
            }]
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id)
        case SET_COMPLETE:
            return state.map(task => {
                if (task.id === action.id) {
                    return { ...task, complete: true }
                } else {
                    return task
                }
            })
            case SET_ACTIVE:
                return state.map(task => {
                    if (task.id === action.id) {
                        return { ...task, complete: false }
                    } else {
                        return task
                    }
                })
        default:
            throw Error('Unknown action: ' + action.type);
    }
}

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return 'ALL'
        case 'SHOW_ACTIVE':
            return 'ACTIVE'
        case 'SHOW_COMPLETE':
            return 'COMPLETE'
        default:
            throw new Error();
    }
}

// CONTEXT
export const TaskContext = createContext(null);

const TaskListApp = () => {
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks);
    const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL')

    const handleDeleteTask = (taskId) => {
        dispatchTasks({
            type: DELETE_TASK,
            id: taskId
        })
    }

    const handleAddTask = (text) => {
        dispatchTasks({
            type: ADD_TASK,
            id: count++,
            text: text,
        })
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'ALL') {
            return true
        }
        if (filter === 'ACTIVE' && !task.complete) {
            return true
        }
        if (filter === 'COMPLETE' && task.complete) {
            return true
        }
        return false
    })

    return (
        <TaskContext.Provider value={dispatchTasks}>
            <div className='App-header'>
                <Typography variant='h1'>Tasks</Typography>
                <TaskFilter dispatch={dispatchFilter} />
                <TaskForm onAddTask={handleAddTask} count={count} />
                <TaskList 
                    tasks={filteredTasks} 
                    onDeleteTask={handleDeleteTask}
                />
            </div>
        </TaskContext.Provider>
    );
}

export default TaskListApp;
