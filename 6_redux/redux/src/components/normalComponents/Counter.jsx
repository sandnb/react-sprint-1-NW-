import React from 'react'
import { useState } from 'react'

function Counter() {
    //State in Counter Component
    const [count,setCount] = useState(0);
    
    //Event handlers
    const increment = ()=>{
        setCount(count + 1);
    }
    const decrement = () =>{
        if(count == 0){
            return
        }else{
            setCount(count - 1);
        }
       
        
    }

  return (
        <>
            <div className="counter">
                <button onClick={increment}>+</button>
                <div className="cvalue">{count}</div>
                <button onClick={decrement}>-</button>
            </div>
        </>
  )
}

export default Counter