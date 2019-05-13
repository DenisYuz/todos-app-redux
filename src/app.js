import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addTodo } from './actions/todos';
import { setTextFilter } from './actions/filters';
import {getVisibleTodos} from './selectors/todos';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//store.dispatch(addTodo({ description: 'Learn React', amount: 4500 }));
//store.dispatch(addTodo({ description: 'Learn Redux', createdAt: 1000 }));
//store.dispatch(addTodo({ description: 'Write Application', amount: 109500 }));
/*
const state = store.getState();
const visibleTodos = getVisibleTodos(state, state.filters);
console.log(visibleTodos);
*/
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
