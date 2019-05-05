import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import selectTodos from '../selectors/todos';

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
    todos: selectTodos(state.todos, state.filters)
  };
};

export default connect(mapStateToProps)(TodoList);
