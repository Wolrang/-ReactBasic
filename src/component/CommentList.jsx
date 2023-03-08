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

// 선생님꺼
// function CommentList() {
//   const [commentList, setCommentList] = useState(comments);
//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');

//   const deleteComment = (index) => {
//     const newCommentList = [...commentList];
//     newCommentList.splice(index, 1);
//     setCommentList(newCommentList)
//     console.log(index)
//   }

//   const addComment = () => {
//     // const add = {name: "히히ㅇㅎㅇㄶ히", comment : "아아아아아?~!!!"}
//     // setCommentList([add,...commentList])

//     const add = {name : name, comment: content}
//     setCommentList([add,...commentList])
//     // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
//     setName('')
//     setContent('')
//   }

//   return (
//     <div>
//       {
//         commentList.map((comment, i)=> {
//           return (
//             <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=> deleteComment(i)}/>
//           )
//         })
//       }
//       {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생 
//           그 때 발생한 이벤트를 매개변수 e
//       */}
//       이름 : <input value={name} onChange={(e) => setName(e.target.value)}/>
//       댓글 : <input value={content} onChange={(e) => setContent(e.target.value)}/>
//       <button onClick={addComment}>글추가</button>
//     </div>
//   )
// }

export default CommentList;