import React from "react";
import { Link } from "react-router";
/*cloneElement passes props from Main to first child component*/
const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  },
});

export default Main;
