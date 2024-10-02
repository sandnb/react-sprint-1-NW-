import React, { useState, useEffect } from 'react';

function UseEffectExamples() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    const setTask = function () {
        // /
        let newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);// taskLists = newTasksList
        setValue("");
    }
    const removeTask = function (id) {
        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }

  
    function secondCb(){
        console.log("Second useEffect");
        return function(){
            console.log("Cleanup for useEffect with no dependency array");
        }
    }
    function thirdCb(){
        console.log("thrid useEffect");
        return function(){
            console.log("Cleanup for useEffect with TaskList Dependency");
        }
    }
    // 1st case where we see what happens when we have empty dependency array
    // in above case only its cb fn called after first render
    // useEffect(firstCb,[]);
    //2nd case where we see what happens when we have no dependency array present
    // in above case only its cb fn called after every render
    //useEffect(secondCb);
    //3rd case where we see what happens when we have a dependency array with a state variable inside it.
    // in above case only its cb fn called after every change in the taskList state variable
   // useEffect(thirdCb,[taskList]);


    console.log("Rendered");
    return (
        <>
            <div>
                {/* input */}
                <input type="text" placeholder="Input Task" value={value}
                    onChange={(e) => { setValue(e.target.value) }}></input>
                <button onClick={setTask}>Add Task </button>
            </div>

            {/* list  */}
            {taskList.map((taskObj) => {
                return (
                    <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                        removeTask={removeTask}></Task>)
            })}
        </>
    )
}
function Task(props) {
    let { id, task, removeTask } = props;
    function firstCb(){
        console.log("First useEffect");
        return function(){
            console.log("Cleanup for useEffect with empty dependency array");
        }
    }
    useEffect(firstCb,[]);
    return (
        <li
            onClick={() => {
                removeTask(id)
            }}
        >
            {task}
        </li>
    )
}
export default UseEffectExamples;

/**
 * useEffect  -> to be called after the render
 * 1. cb is called  once in the lifetime => useEffect(fn,[])
 *   cleanup-> after component is removed then cleanup is called
 *   usecase -> onpage first load data fetching
 * 2. cb is called n number of times in the lifetime -> useEffect(fn)
 *   cleanup -> before next useEffect call happens this cleanup function will be executed
 *  usecase -> autosave for every 5 secs, where cleanup code will actually update the
 *             state variable that is reponsible to store the written code on the screen
 * 3. cb is called if the dependency updates number of times in lifetime->useEffect(fn,[stateVariable])
 *   cleanup  -> before next useEffect call happens then clean up will be called
 *  useccase
 */