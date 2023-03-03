/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let user = 'World';
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState(0);
  let [counting, setCounting] = useState([0, 0, 0]);
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[사용]
  let [title, setTitle] = useState(["DW아카데미 502호", "DW아카데미 503호", "DW아카데미 501호"]);
  let [name, setName] = useState(["김상현", "김상현", "김상현"])
  // let [bgColor, setbgColor] = useState('');
  let [bgColor, setbgColor] = useState('');
  let [up, setUp] = useState([' a ','b ','c'])

  let changeBg = () => {
    let newBg = bgColor == 'white' ? 'skyblue' : 'white';
    setbgColor(newBg)
  };

  // map함수가 array의 갯수만큼 return을 반복한다.
  // 매개변수(파라미터)를 만들어주면 함수 파라미터가 array자료 안에 있는 데이터가 된다.
  [1, 2, 3].map(function(num) {
    return console.log(num);
  });

  // let num = [1, 2, 3, 4, 5];
  // let newNum = num.map((num) => num + 1);
  // let newNum2 = num.map((num) => num * 3);
  // console.log(num);
  // console.log(newNum);
  // console.log(newNum2);

  let num = [1, 2, 3, 4, 5];
  let newArr = num.map(function(element) {
    return element * 3;
  });
  console.log(newArr)

  for(let  i = 0; i < num.length; i++) {
    num[i] = num[i] * 3;
  }
  console.log(num);
  // jsx문법에서는 전체를 감싸는 태그 안에 다른 태그들을 만들 수 있음 
  // jsx문법에서는 클로징 태그 필수
  return (
    <div className="App" style={{backgroundColor : bgColor}}>
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button onClick={()=>{setCount(count + 1)}}>Click me</button>
      </div>

      {
        title.map(function (a, i) {

          return (
            <div className="title" key={i}>
              <h4>{title[i]}</h4>
              {/* <h4>{a}</h4> */}
              <span>👍 + {counting[i]}</span>
              <button onClick={() => {
                let copy = [...counting]
                copy[i] = copy[i] + 1
                setCounting(copy)
              }}>Click me</button>
              <p>안녕하세요 저는 {name[i]}입니다.</p>
            </div>
          )
        })
      }

      {/* <div className="title">
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
      </div> */}

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
        copy.sort();
        setTitle(copy);
      }}>글 정렬</button>

      <button className='button' onClick={()=>{
        setbgColor('skyblue');
        setbgColor(bgColor ? '' : 'skyblue')
      }}>배경색변경</button>

      <button className='button' onClick={changeBg}>배경색변경</button>
      <button className='button' onClick={() => {
        let copy = [...name];
        copy = ['aaa', 'bbb', 'ccc'];
        setName(copy);
      }}>이름변경</button>

      {
        name.map(function (a, i) {
          return (
            <button className='button' key={i} onClick={() => {
              let copy = [...name];
              copy[i] = "Smith"
              setName(copy);
            }}>이름변경</button>
          )
        })
      }

      {
        ['sang ', 'hyeon ', 'kim'].map(function(e) {
          return e.toUpperCase();
        })
      }

      {
        up.map(function (e) {
          return e.toUpperCase();          
        })
      }

    </div>
  );
}

export default App; 4