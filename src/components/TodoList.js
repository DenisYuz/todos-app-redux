import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import {getVisibleTodos} from '../selectors/todos';

const TodoList = (props) => (
  <div>
    <h1>Todos List</h1>
    {props.todos.map((todo) => {
      return <TodoListItem key={todo.id} {...todo} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state, state)
  };
};

export default connect(mapStateToProps)(TodoList);
