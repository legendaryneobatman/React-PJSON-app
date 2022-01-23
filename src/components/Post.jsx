import React, {useEffect} from 'react';
import CommentsList from "./Comments/CommentsList";

const Post = (props) => {

  return (
      <div className="post || mt-1">
        <div className="post-card || card">
          <div className="post-body || card-body">
            <div className="post-header || row">
              <h5 className={"col-1"}>ID={props.post.id}</h5>
            </div>
            <h5 className="post-title || card-title text-primary">{props.post.title}</h5>
            <p className="post-body || card-text text-body">{props.post.body}</p>
          </div>
          <div className="post-comments">

            <CommentsList postId={props.post.id}/>

          </div>
        </div>
      </div>
  );
};

export default Post;
