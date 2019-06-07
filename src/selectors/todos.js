import moment from 'moment';
import { createSelector } from 'reselect'
// Get visible todos



const _getTodosArray = (state) => {  
  return Object.keys(state.todos).map( (id)=>(state.todos[id]) )
}

const _getTodosFilter = (state) => {
  return {
   
    startDate: state.filters.startDate,
    endDate: state.filters.endDate,
    text: state.filters.text
  }
}





  

  export const getVisibleTodos =  createSelector(
    [_getTodosArray, _getTodosFilter],
    
    (todosArray,todosFilter) => {
      return todosArray.filter((todo) => {
          const createdAtMoment = todo.createdAt ? moment(todosFilter.createdAt) : null;
          const isStartDateMatch = todosFilter.startDate ? todosFilter.startDate.isSameOrBefore(createdAtMoment, 'day') : true;
          const isEndDateMatch = todosFilter.endDate ? todosFilter.endDate.isSameOrAfter(createdAtMoment, 'day') : true;
          const isTextMatch = todo.description.toLowerCase().includes(todosFilter.text.toLowerCase());
        
          return isStartDateMatch && isEndDateMatch && isTextMatch;
        })})
     
    
  
  
  
  

  
/*
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
*/
export const getTodoById = (state, id) => {

   return state.todos[id];
}





