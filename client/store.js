import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

//import route reducer
import rootReducer from "./reducers/index";

//default data to work with
import comments from "./data/comments";
import posts from "./data/posts";

//create object for default data
const defaultState = { posts, data };

const store = createStore(rootReducer, defaultState);

//save router/browser history in store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
