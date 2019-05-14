// todos Reducer

const todosReducerDefaultState = {};

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        [action.todo.id]: action.todo
      }
    case 'REMOVE_TODO':
      delete state[action.todo.id];
      return {...state}
      //return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TODO':
     state[action.todo.id] = {
      [action.todo.id]: action.todo
    }
    return {
      ...state
    }    
    default:
      return {...state};
  }
};
