import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/todo-item/TodoItem';
import { TodosPageWrapper } from "./TodosStyle";
import { Typography, Row, Col } from "antd";

const Todos = ({ todos }) => {
    const { Title } = Typography;

    return (
      <TodosPageWrapper>
        <Title>Todos</Title>
        {todos.length <= 0 ? (
          <p style={{ color: '#fff' }}>
            Nothing <span style={{ fontWeight: 'bold' }}>to do</span> at the moment.
          </p>
        ) : (
          <Row>
            {todos.map((todo, index) => (
              <Col key={index} xs={24} lg={8} xl={6}>
                <TodoItem
                  key={index}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  isCompleted={todo.isCompleted}
                  createdAt={todo.createdAt}
                />
              </Col>
            ))}
          </Row>
        )}
      </TodosPageWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);