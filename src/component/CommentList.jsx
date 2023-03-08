import React, { useState } from "react";
import Comment from "./Comment";

const comments = [
  {
    name : "김상현1",
    comment : "Lorem1",
  },
  {
    name : "김상현2",
    comment : "Lorem2"
  }, {
    name : "김상현3",
    comment : "Lorem3"
  }
]

function CommentList() {
  const [commentList, setCommentList] = useState(comments);


  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  }

  return (
    <div>
      {
        commentList.map((comment, i) => {
          return (
            <Comment key={i} name={comment.name} comment={comment.comment} onDelete={() => deleteComment(i)}></Comment>
          )
        })
      }
    </div>
  )
}

export default CommentList;