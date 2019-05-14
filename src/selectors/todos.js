import moment from 'moment';

// Get visible todos

export const getVisibleTodos =  (state, { text, sortBy, startDate, endDate }) => {

   const todosArray = Object.keys(state.todos).map( (id)=>(state.todos[id]) );


  return todosArray.filter((todo) => {
    const createdAtMoment = moment(todo.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = todo.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export const getTodoById = (state, id) => {

   return state.todos[id];
}