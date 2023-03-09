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
    })
  }

  const changeComment = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleOnKeyPress = (e) => {
    e.key == "Enter" && name === '' || comment === '' ? alert('이름과 댓글을 입력하세요.') : (
      (() => {
        const add = { name, comment }
        setCommentList([add, ...commentList])

        setInputs({
          name: '',
          comment: '',
        })
      })()
    )
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
      
      이름 : 
      <input 
      type="text" 
      name="name" 
      value={name} 
      onChange={changeComment}
      onKeyPress={handleOnKeyPress}>
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

//   // 기존 list 추가 함수
//   // const addComment = () => {
//   //   // const add = {name: "히히ㅇㅎㅇㄶ히", comment : "아아아아아?~!!!"}
//   //   // setCommentList([add,...commentList])

//   //   const add = {name : name, comment: content}
//   //   setCommentList([add,...commentList])
//   //   // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
//   //   setName('')
//   //   setContent('')
//   // }


//   // 삼항 연산자로 value가 빈 값일 때 list 추가되지 않게 하는 기능 추가
//   const addComment = () => {
//     // name, content에 value값이 없을 때 (조건)
//     // true일 때 alert('이름과 댓글을 입력하세요')
//     name === '' || content === '' ? alert('이름과 댓글을 입력하세요') : (

//       // IIFE (즉시 실행 함수)
//       // false일 때(name, content에 value값이 있을 때) 아래 함수가 즉시 실행되게 한다.
//       (()=>{
//         // add라는 새로운 객체 생성
//         const add = {name : name, comment: content}
//         // 기존 commentList 앞에 add를 넣어서 add를 더한 새로운 객체를 생성한다.
//         setCommentList([add,...commentList])
//         // state변경 함수로 input에 들어있는 값을 초기화 한다.
//         setName('')
//         setContent('')
//       })()
//     )
//   };

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