//actions are just objects with a type and related data. These functions are action creators

//increase
//from console we can manually dispatch an action:
// $r.store.dispatch({ type: "INCREMENT_LIKES", index: 0 });
//$r references currently selected element (Provider)
// ** every time you dispatch an action, every single reducer runs! You decide what gets updated with each action
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index,
  };
}
//add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment,
  };
}

//remove comment
export function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index,
  };
}
