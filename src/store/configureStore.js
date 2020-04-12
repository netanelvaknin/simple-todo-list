import { createStore, combineReducers, applyMiddleware } from "redux";
import todosReducer from './reducers/todos';
import thunk from "redux-thunk";

export default () => {
    return createStore(
      combineReducers({
        todos: todosReducer,
      }),
      applyMiddleware(thunk)
    );
}