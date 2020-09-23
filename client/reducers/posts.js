//reducer takes in two things: the action(info about what happened) & a copy of current state. then it returns and updated version of store. then react does its updates

function posts(state = [], action) {
  console.log({ state, action });
  return state;
}

export default posts;
