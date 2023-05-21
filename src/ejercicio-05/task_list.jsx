import React, { useState, useEffect } from 'react';
import { LEVELS } from './levels.enum';
import { Task } from './task.class';
import TaskComponent from './task';

// Importamos la hoja de estilos de task.scss
import './task.scss'
import TaskForm from './TaskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)
    
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setTimeout(()=> {
            setLoading(false);
        }, 200);
        return () => {
        console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);


    function completeTask(task) {
        console.log('Complete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed
        // We update the state of the component with the new list of tasks and it will 
        // update the iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function removeTask(task) {
        console.log('Delete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1)
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Delete this task: ', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                                <TaskComponent 
                                    key={index} 
                                    task={task}
                                    complete={completeTask}
                                    remove={removeTask}
                                >
                                </TaskComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let taskTable;

    if (tasks.length > 0) {
        taskTable = <Table></Table>
    } else {
        taskTable = (
        <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div className='col-12'>
            <div className='card'>
                {/* Card Header */}
                <div className='card-header p-3'>
                    <h5>
                        Your Tasks:
                    </h5>
                </div>
                {/* Card Body */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position:'relative', height: '400px'} }>
                    {/* TODO: Add Loading Spinner */}
                    { loading ? (<p style={loadingStyle}>Loading tasks...</p>) : taskTable }
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;