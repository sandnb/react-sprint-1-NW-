import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from '../../redux/counterSlice';
const actions = counterSlice.actions;
function Counter() {
    
 
    // this is used to get the initial state 
    const count = useSelector((store) => store.counterState.count);

    //used to perform actions on the state variables
    const dispatch = useDispatch();
   
    //Event handlers
    const increment = ()=>{
     // console.log("increment willl happen");
     dispatch(actions.increment());
    }
    const decrement = () =>{
        //console.log("increment willl happen");
        dispatch(actions.decrement());
    }

  return (
        <>
            <div className="counter">
                <button onClick={increment}>+</button>
                <h2 className="cvalue">{count}</h2>
                <button onClick={decrement}>-</button>
            </div>
        </>
  )
}

export default Counter