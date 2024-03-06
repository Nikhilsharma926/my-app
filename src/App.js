import React,{usestate} from 'react'
import "./App.css"
import TodoInput from './components/TodoInput';

function App() {
    const [inputText,setInputText] =usestate('');

  return (
    <div className="input-container">
<input type="text" 
className="input-box-todo"
placeholder="enter your todo"/> 
onchange={e=>{
    setInputText(e.target.value)
}}

<button className="add-btn">+</button>  
    <div>{inputText}</div>
    </div>
  );
}

export default App