//reducer edits state. Takes in two things: the action(info about what happened) & a copy of current state. then it returns and updated version of store. then react does its updates

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      const index = action.index;
      /*we only want to update the current photo's likes but we want to return the entire array*/
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1 },
        ...state.slice(index + 1),
      ];
    /*provide default because all reducers are activated but we only want to act on one*/
    default:
      return state;
  }
}

export default posts;
