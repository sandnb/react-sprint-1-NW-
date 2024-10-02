import React from 'react'
import { useState, useEffect} from 'react'


function GetData() {
    const [data,setData] = useState(null);//data=null

    useEffect(
     function fn(){
       async function fetchData(){
         console.log("useEffect Ran");
          const response =await fetch('https://jsonplaceholder.typicode.com/users/1');
          const user = await response.json();
          setData(user);//data = user
       }
       fetchData();
     },
    []);
    //useEffect is used to call a function once the render actually happens
    console.log("render");
   
   
     return (
       <>
        {data == null ?
           <h2>Placeholder loading the data ....</h2>:<>
           <h2>Name: {data.name}</h2>
           <h2>Username : {data.username}</h2>
           <h2>Email: {data.email}</h2>
          </>
        }
       </>
     )
}

export default GetData