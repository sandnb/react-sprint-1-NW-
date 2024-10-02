import React from 'react'

function Lists(props) {
    const { taskArr ,handleDelete } = props;
    return (
      <div className="list">
        <ul>
          {taskArr.map((task,idx )=>{
            return <li onClick={()=>{
             // console.log(`Element with id: ${idx} is deleted`);
             handleDelete(idx)
            }} key={idx}>{task}</li>
          })}
        </ul>
      </div>
    )
  }
  

export default Lists