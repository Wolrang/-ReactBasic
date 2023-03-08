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

const newComments = [
  {
    name : "김상현4",
    comment : "Lorem4",
  },
  {
    name : "김상현5",
    comment : "Lorem5"
  }
]

function CommentList() {
  const [commentList, setCommentList] = useState(comments);


  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  }

  const [inputs, setInputs] = useState({
    name : "",
    comment : ""
  })

  const {name, comment} = inputs;

  const addComment = () => {
    //   const add = {name: "ㅎㅎㅎ", comment: "ㅇㅇㅇㅇ"}
    //   setCommentList([add, ...commentList]);

    //   const newCommentList = ([...newComments, ...comments])
    //   setCommentList(newCommentList)

    const add = { name, comment }
    setCommentList([add, ...commentList])

    setInputs({
      name: '',
      comment: '',
    });
  }

  const changeComment = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <div>
      {
        commentList.map((comment, i) => {
          return (
            <Comment key={i} name={comment.name} comment={comment.comment} onDelete={() => deleteComment(i)}></Comment>
          )
        })
      }
      
      이름 : 
      <input 
      type="text" 
      name="name" 
      value={name} 
      onChange={changeComment}>
      </input>

      댓글 : 
      <input 
      type="text" 
      name="comment" 
      value={comment} 
      onChange={changeComment}
      onKeyPress={handleOnKeyPress}>
       </input>

      <button onClick={addComment}>글 추가</button>
    </div>
  )
}

export default CommentList;