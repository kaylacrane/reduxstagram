import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from "./comments";

//we can only technically have one reducer so we have to put everything into a rootreducer

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer,
});

export default rootReducer;
