const defaultTodosState = [];

const todosReducer = (state = defaultTodosState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'CHANGE_STATUS':
            const index = state.findIndex(todo => todo.id === action.id);
            state[index].isCompleted = !state[index].isCompleted;
            return [...state];
        case 'REMOVE_TODO': 
            return state.filter(todo => todo.id !== action.id);
        default: 
            return state;
    }
}

export default todosReducer;