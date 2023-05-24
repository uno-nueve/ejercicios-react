import React from 'react';
import {Formik, Form, useField, ErrorMessage} from 'formik'
import * as Yup from 'yup'

// * Models *
import { LEVELS } from './levels.enum';

// * Inputs *
const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name || props.id} className='form-label mt-2'>{label}</label>
            <input {...field} {...props} className='form-control form-control-lg' />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
}

const SelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props.name);
    return (
        <>
            <label htmlFor={props.name || props.id} className='form-label mt-2'>{label}</label>
            <select {...field} {...props} className='form-control form-control-lg' />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </>
    );
}

const TaskForm = ({add, length}) => {

    // * Formik Setup *

    const initialTask = {
        name: '',
        description: '',
        completed: false,
        level: ''
    }

    const taskSchema = Yup.object({
        name: Yup.string()
            .required('Task must have a name'),
        description: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Task must have a description'),
        level: Yup.string()
            .oneOf(
                [LEVELS.NORMAL, LEVELS.URGENTE, LEVELS.BLOCKING]
            )
            .required('Must select a priority level')
    })

    return (
        <div>
            <Formik
                initialValues={initialTask}
                validationSchema={taskSchema}
                onSubmit={(value) => {
                    add(value);
                }}
            >
                <Form>
                    <TextInput
                        label='Name'
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Buy food'
                    />
                    <TextInput
                        label='Description'
                        id='description'
                        name='description'
                        type='text'
                        placeholder="You have 20% discount on Mondays"
                    />
                    <SelectInput label='Priority' name='level'>
                        <option disabled value=''>Select a priority level</option>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENTE}>Urgente</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </SelectInput>

                    <button type='submit' className='btn btn-success btn-lg mt-4' >
                        {length > 0 ? 'Add new task' : 'Create a task'}
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default TaskForm;
