import React from 'react'
import InputBox from './InputBox';
import Lists from './Lists';
import { useState } from "react"

function Todo() {
    const [taskArr,setTaskArr] = useState([]);// taskArr=[]
  
    const addTask = (inputValue) =>{
     const newTask = inputValue;
     // we never mainpulate/change the state variable on our own
     // taskArr.append(newTask) -> we should not do this, as here the state varaible should not be manipulated by our own
     const newTaskArr = [...taskArr, newTask];
     setTaskArr(newTaskArr);// we are using newly created array and keep it into taskArr = newTaskArr;
     }
    
     const handleDelete = (idx)=>{
      const fileteredTasks = taskArr.filter((task,cIdx)=>{
        return cIdx != idx;
      })
      setTaskArr(fileteredTasks);//taskArr = filteredTasks
     }
     return (
       <>
         <InputBox addTask={ addTask }></InputBox>
         <Lists taskArr={ taskArr } handleDelete= { handleDelete }></Lists>
       </>
     )
}

export default Todo