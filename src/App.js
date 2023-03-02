/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let user = 'World';
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState(0);
  let [counting, setCounting] = useState(0);
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[사용]
  let [title, setTitle] = useState(["DW아카데미 502호", "DW아카데미 503호", "DW아카데미 501호"]);
  // jsx문법에서는 전체를 감싸는 태그 안에 다른 태그들을 만들 수 있음 
  // jsx문법에서는 클로징 태그 필수
  return (
    <div className="App">
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button onClick={()=>{setCount(count + 1)}}>Click me</button>
      </div>

      <div className="title">
        <h4>{title[0]}</h4>
        <span>👍 + {counting}</span>
        <button onClick={()=>{setCounting(counting + 1)}}>Click me</button>
        <p>안녕하세요 저는 김상현입니다.</p>
      </div>

      <div className="title">
        <h4>{title[1]}</h4>
        <span>👍 + {counting}</span>
        <button onClick={()=>{setCounting(counting + 1)}}>Click me</button>
        <p>안녕하세요 저는 김상현입니다.</p>
      </div>

      <div className="title">
        <h4>{title[2]}</h4>
        <span>👍 + {counting}</span>
        <button onClick={()=>{setCounting(counting + 1)}}>Click me</button>
        <p>안녕하세요 저는 김상현입니다.</p>
      </div>

      {/* <button onClick={()=>{setTitle(["리액트 너무 재밌어요!", "DW아카데미 503호", "DW아카데미 501호"])}}>글 제목 변경</button> */}
      <button className='button' onClick={()=>{
        let copy = [...title];
        copy[0] = "리액트 너무 재밌어요!";
        setTitle(copy);
      }}>글 제목 변경</button>

      <button className='button' onClick={()=> {
        let copy = [...title];
        copy[1] = "리액트 너무 헷갈려요!";
        setTitle(copy);
      }}>두번째 글 제목 변경</button>

      <button className='button' onClick={()=> {
        let copy = [...title];
        copy = copy.sort();
        setTitle(copy);
      }}>글 정렬</button>

    </div>
  );
}

export default App; 4