import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    // get index of clicked post
    const { postId } = this.props.params;
    const index = this.props.posts.findIndex((post) => post.code === postId);
    //get the post
    const post = this.props.posts[index];
    const postComments =
      this.props.comments[postId] ||
      []; /*in the case that there are no comments we provide an empty []*/

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />;
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  },
});

export default Single;
