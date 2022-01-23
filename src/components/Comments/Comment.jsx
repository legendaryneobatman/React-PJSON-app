import React, {useEffect} from 'react';

const Comment = (props) => {
  return (
      <div className="card p-3 mt-2" >
        <div className="d-flex justify-content-between align-items-center">
          <div className="user d-flex flex-row align-items-center">
            <img src="https://i.imgur.com/ZSkeqnd.jpg" width="50" className="user-img rounded-circle m-2"/>
            <span className={"comment-body"}>
              <h4>{props.comment.name}</h4>
              <small className="font-weight-bold">{props.comment.body}</small>
            </span>
          </div>
          <small>3 days ago</small>
        </div>
        <div className="action d-flex justify-content-between mt-2 align-items-center">
          <div className="reply px-4">
            <small>Remove</small>
            <span className="dots"/>
            <small> Reply</small>
            <span className="dots"/>
            <small> Translate</small></div>
          <div className="icons align-items-center">
            <i className="fa fa-check-circle-o check-icon text-primary"/>
          </div>
        </div>
      </div>
  );
};

export default Comment;
