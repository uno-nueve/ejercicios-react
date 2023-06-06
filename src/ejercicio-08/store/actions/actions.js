export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let countID = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: countID++,
            text
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}