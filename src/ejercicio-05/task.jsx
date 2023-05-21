import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from './task.class';
import { LEVELS } from './levels.enum';

// Importamos una hoja de estilos de task.scss
import './task.scss'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Function that returns a badge depending on the level of the task
     */
    function taskLevelBadge(){
        switch(task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENTE:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    };

    /**
     * Function that returns icon depending on completed task
     */
    function taskCompletedIcon() {
        if(task.completed) {
            return(<i onClick={()=> complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={()=> complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const taskPending= {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className='fw-normal ' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' onClick={()=> remove(task)} style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;