import React, {useEffect} from 'react';

const Post = (props) => {

  return (
      <div className="post mt-1">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <h5 className={"col-1"}>ID={props.post.id}</h5>
            </div>
            <h5 className="card-title text-primary">{props.post.title}</h5>
            <p className="card-text text-body">{props.post.body}</p>
          </div>
        </div>
      </div>
  );
};

export default Post;
