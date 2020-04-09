import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todos';

export default () => {
    return createStore(combineReducers({
        todos: todosReducer
    }));
}