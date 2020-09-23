import React from "react"; /*loads from node_modules*/
import { render } from "react-dom"; /*loads render method that allows us to render out to html*/

//import CSS (webpack handles all loading)
import css from "./styles/style.styl"; /*all written in stylus*/

//import components
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// browserHistory allows us to do push state and change the urls without having to reload page
//Main is our parent that then gets passed child components through indexRoute at / by default or through a nested route with dynamic id
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

render(
  router,
  document.getElementById("root")
); /*takes two params: what to render and reference to where you want to put that*/
