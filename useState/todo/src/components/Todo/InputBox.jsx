import React from 'react'
import { useState } from 'react'

function InputBox(props) {
    const [inputValue,setInputValue] = useState("");
    const handleInput = (e) =>{
      setInputValue(e.target.value);
  }
  const addChildTask = () =>{
    props.addTask(inputValue);// when there is a click happens, we need to send the data
    //from input element to Todo element using a function
    setInputValue("");
  }
    return (
      <div>
        <div className='inputBox'>
          <input type='text' value={inputValue} onChange={handleInput}/>
          <button onClick={ addChildTask }>Add Task</button>
        </div>
      </div>
    )
  }
  
export default InputBox;