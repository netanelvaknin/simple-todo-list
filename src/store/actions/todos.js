import { v4 as uuid } from "uuid";
const moment = require('moment');

export const addTodo = ({ title, description } = {}) => ({
    type: "ADD_TODO",
    payload: {
      id: uuid(),
      isCompleted: false,
      title,
      description,
      createdAt: moment().calendar()
    }
});

export const changeStatus = ({ id }) => ({
  type: 'CHANGE_STATUS',
  id
})

export const removeTodo = ({ id }) => ({
    type: 'REMOVE_TODO',
    id
});