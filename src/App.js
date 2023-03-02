/* eslint-disable */
import logo from './logo.svg';
import './App.css';

function App() {
  let user = 'World';
  // jsx문법에서는 전체를 감싸는 태그 안에 다른 태그들을 만들 수 있음 
  // jsx문법에서는 클로징 태그 필수
  return (
    <div className="App">
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>
    </div>
  );
}

export default App; 4