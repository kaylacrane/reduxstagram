import React from "react"; /*loads from node_modules*/
import { render } from "react-dom"; /*loads render method that allows us to render out to html*/

//import CSS (webpack handles all loading)
import css from "./styles/style.styl"; /*all written in stylus*/

//import components
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Provider } from "react-redux"; /*allows us to use redux with react*/
import store, {
  history,
} from "./store"; /*use store no {} because it's a default export and {history} because it's a named export*/

// browserHistory (history here) allows us to do push state and change the urls without having to reload page
//Main is our parent that then gets passed child components through indexRoute at / by default or through a nested route with dynamic id
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);
//test if Provider is giving access to store by going to React DevTools and selecting Provider. Store should be listed there in details

render(
  router,
  document.getElementById("root")
); /*takes two params: what to render and reference to where you want to put that*/
