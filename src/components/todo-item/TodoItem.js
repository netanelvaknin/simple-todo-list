import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, changeStatus } from '../../actions/todos';
import { Card } from './TodoItemStyle';
import { Button } from 'antd';
import { DeleteFilled, CheckSquareFilled, MinusSquareFilled } from "@ant-design/icons";

const TodoItem = ({
    id, 
    title, 
    description, 
    createdAt,
    isCompleted,
    changeStatus, 
    removeTodo}) => {
    return (
      <Card isCompleted={isCompleted} title={title}>
        <p>{description}</p>
        <p>{createdAt}</p>
        <Button 
            icon={isCompleted ? <MinusSquareFilled /> : <CheckSquareFilled />} 
            onClick={() => changeStatus({ id })} />
        <Button icon={<DeleteFilled />} onClick={() => removeTodo({ id })} />
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