import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import { AddTodosPageWrapper, Form, Input } from "./AddTodosStyle";
import { Typography, Button, message } from "antd";
  
message.config({
  top: 70,
  maxCount: 1,
});

const AddTodos = ({ addTodo }) => {
    const { Title } = Typography;
    const { TextArea } = Input;
    const [todoValues, setTodoValues] = useState({ title: '', description: '' });

    const addNewTodo = (e) => {
        e.preventDefault();

        if (todoValues.title !== '') {
          addTodo({ 
            title: todoValues.title, 
            description: todoValues.description || 'No descreption' 
          });

          message.success({
            top: 500,
            content: "Todo is added",
            maxCount: 1,
          });
          
          setTodoValues({ title: '', description: '' });
        } else {
          message.error('Title is required');
        }
    }


    return (
      <AddTodosPageWrapper onSubmit={addNewTodo}>
        <Title>Add todos</Title>

        <Form autoComplete="off">
          <Input
            name="title"
            placeholder="Title"
            allowClear
            value={todoValues.title}
            onChange={(e) =>
              setTodoValues({ ...todoValues, title: e.target.value })
            }
          />
          <TextArea
            name="description"
            placeholder="Description (Optional)"
            allowClear
            value={todoValues.description}
            autoSize={{minRows: 4, maxRows: 4}}
            style={{ marginBottom: '1rem' }}
            onChange={(e) =>
              setTodoValues({ ...todoValues, description: e.target.value })
            }
          />
          <Button htmlType="submit" type="primary" size="large">
            Add todo
          </Button>
        </Form>
      </AddTodosPageWrapper>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title, description) => dispatch(addTodo(title, description))
    }
}

export default connect(undefined, mapDispatchToProps)(AddTodos);