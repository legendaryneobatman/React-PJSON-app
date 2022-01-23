import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import CommentsService from "../API/CommentsService";


const CommentsList = (props) => {

  const [comments, setComments] = useState([])
  const commentsMap = comments  ? (comments.map((comment, i) => (<Comment comment={comment} postId={i} key={i}/>))) : console.log('mapping comments error')
  const [toggleSwitch, setToggleSwitch] = useState(false)


  useEffect(() => {
    fetchComments()
  }, [])

  async function fetchComments() {
    const response = await CommentsService.getAll(props.postId);
    setComments(response.data)
  }
  function toggleComments() {

  }

  return (
      <div>
        <div className="container-fluid m-3">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <div className="headings d-flex justify-content-between align-items-center mb-3">
                <h5>Comments</h5>
                <div className="buttons">
                  <span className="badge bg-white d-flex flex-row align-items-center">
                    <span className="text-primary">Comments "ON"</span>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onChange={() => {setToggleSwitch(!toggleSwitch)}}  checked={toggleSwitch}/>
                      </div>
                    </span>
                </div>
              </div>
              <div className={`row ${!toggleSwitch ? ('d-none') : '' }`}>
                <div className="col-md-12">
                  {commentsMap}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default CommentsList;
