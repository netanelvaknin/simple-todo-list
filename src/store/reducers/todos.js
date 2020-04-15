import { ADD_TODO, CHANGE_STATUS, REMOVE_TODO } from '../types';
const defaultTodosState = [];

const todosReducer = (state = defaultTodosState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case CHANGE_STATUS:
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].isCompleted = !state[index].isCompleted;
            return [...state];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}

export default todosReducer;