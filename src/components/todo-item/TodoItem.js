import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, changeStatus } from '../../store/actions/todos';
import { Card } from './TodoItemStyle';
import { Button, message } from 'antd';
import { DeleteFilled, CheckSquareFilled, MinusSquareFilled } from "@ant-design/icons";

const TodoItem = ({
    id, 
    title, 
    description, 
    createdAt,
    isCompleted,
    changeStatus, 
    removeTodo}) => {
    
    const removeTodoItem = (id) => {
      message.error('Todo has removed');
      removeTodo({ id })
    }

    const markAsCompleted = (id) => {
      changeStatus({ id });

      !isCompleted
        ? message.success("Marked as completed")
        : message.warning("Marked as not completed");
    }
    return (
      <Card isCompleted={isCompleted} title={title}>
        <p>{description}</p>
        <p>{createdAt}</p>
        <Button 
            icon={isCompleted ? <MinusSquareFilled /> : <CheckSquareFilled />} 
            onClick={() => markAsCompleted(id)} />
        <Button icon={<DeleteFilled />} onClick={() => removeTodoItem(id)} />
      </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodo(id)),
        changeStatus: (id) => dispatch(changeStatus(id))
    }
}

export default connect(undefined, mapDispatchToProps)(TodoItem);