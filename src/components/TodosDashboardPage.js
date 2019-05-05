import React from 'react';
import TodoList from './TodoList';
import TodoListFilters from './TodoListFilters';

const TodoDashboardPage = () => (
  <div className="todosApp">
    <TodoListFilters />
    <TodoList />
  </div>
);

export default TodoDashboardPage;
