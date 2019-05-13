import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { editTodo, removeTodo } from '../actions/todos';
import { getTodoById } from '../selectors/todos';

const EditTodoPage = (props) => {
  return (
    <div>
      <TodoForm
        todo={props.todo}
        onSubmit={(todo) => {
          props.dispatch(editTodo(props.todo.id, todo));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeTodo({ id: props.todo.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    todo: getTodoById(state,props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditTodoPage);
