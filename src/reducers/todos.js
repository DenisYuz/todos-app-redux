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
      let copyOfAllTodos = {...state}

      delete copyOfAllTodos[action.id];

      
      return copyOfAllTodos;
      //return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TODO':
     
     return {
      ...state,
      [action.id]:
       {
         ...state[action.id],
          ...action.updates
      }
    }    
    default:
      return state;
  }
};
