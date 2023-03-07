import React from 'react'
// import './Comment.css'
import logo from './images/냐오하.jpg'
import {useState} from 'react'
import CommentList from './CommentList';

const styles = {
  wrapper: {
    display: 'flex',
    margin: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '16px'
  },

  img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '8px'
  },

  nameText: {
    fontSize: '18px',
    fontWeight: 'bold'
  },

  commentText: {
    fontSize: '14px'
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '10px'
  },
}

// const wrapper = {
//   display: 'flex',
//   margin: '8px',
//   padding: '8px',
//   border: '1px solid #ccc',
//   borderRadius: '16px'
// }

// const img = {
//   width: '50px',
//   height: '50px',
//   borderRadius: '50%'
// }

// const container = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   marginLeft: '8px'
// }

// const nameText = {
//   fontSize: '18px',
//   fontWeight: 'bold'
// }

// const commentText = {
//   fontSize: '14px'
// }


// const Comment = (props) => {
//   return (
//     <div className='wrapper'>
//       <div className="comment">
//         <div className='img'>
//           <img src={logo} alt="냐오하" />
//         </div>
//           <div className="text">
//             <h1>{props.user}</h1>
//             <p>{props.comment}</p>
//           </div>
//       </div>
//     </div>
//   )
// }

function Comment(props, onRemove) {
  // const [show, setShow] = useState(false);

  return (
    <div className='wrapper' style={styles.wrapper}>
      <div className='img-box'>
        <img style={styles.img} src={logo} alt='냐오하'></img>
      </div>

      <div className='content-container' style={styles.contentContainer}>
        <span className='name-text' style={styles.nameText}>{props.name}</span>
        <span className='comment-text' style={styles.commentText}>{props.comment}</span>
      </div>
      <button onClick={() => onRemove(props.id)}>X</button>
      {/* <div style={styles.button}>
        <button onClick={() => {
          setShow(!show);
        }}>X</button>
        {show && <Comment></Comment>}
      </div> */}
    </div>
  )
}

export default Comment;