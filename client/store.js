import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

//import route reducer
import rootReducer from "./reducers/index";

//default data to work with
import comments from "./data/comments";
import posts from "./data/posts";

//create object for default data. we will have to create a reducer for each piece of state (in this case 2: posts & comments)
const defaultState = { posts, comments };

const store = createStore(rootReducer, defaultState);

//save router/browser history in store
export const history = syncHistoryWithStore(browserHistory, store);

/*in order to be able to hot load reducers */
if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
