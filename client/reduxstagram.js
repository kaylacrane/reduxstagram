import React from "react"; /*loads from node_modules*/
import { render } from "react-dom"; /*loads render method that allows us to render out to html*/

//import CSS (webpack handles all loading)
import css from "./styles/style.styl"; /*all written in stylus*/

render(
  <p>Howdy</p>,
  document.getElementById("root")
); /*takes two params: jsx and reference to where you want to put that*/
