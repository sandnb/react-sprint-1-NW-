import React, { useState, useEffect } from 'react'
import {Routes, Route, Link, useParams, Navigate} from "react-router-dom"

function Routing() {
  return (
    <div>
        <h2>Routing Example</h2>
        <nav>
            <ul>
                <li>
                  <Link to="/home">Home Page</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/list">Listings</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/home"  element={<Home></Home>}></Route>
            <Route path="/about/*"  element={<About></About>}></Route>
            <Route path="/list" element={<Listings></Listings>}></Route>
            {/* the below route is a dynamic Route */}
            <Route path="/users/:id" element={<Users></Users>}></Route>
              {/* Redirecting Routing */}
              <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
              {/*  the below path '*' is a wild card entry */}
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>     
        </Routes>

    </div>
  )
/* 
1. Normal Rounting
2. Link Tag -  when ever we use this tag then reload doesnt happen when we go from one page to another page
3. Dynamic Routing / Template Routing
4. Nested Routing
5. Custom Routing
6. Redirecting Routing
*/
  function Users(props){
    let params = useParams();
    let [user,setUser]= useState(null);//user=null
    useEffect(()=>{
      (async function ()  {
        console.log("useEffect Ran")
        const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
        const userData = await resp.json();
        setUser(userData);
      })()
    },[]);
    console.log('rendered')
    return (<>
      {user == null ? <h3>Loading.....</h3>:<>
          <h4>User Name: {user.username}</h4>
          <h3>Name: {user.name.firstname + " " + user.name.lastname}</h3>
          <h3>Phone: {user.phone}</h3>
      </>}
    </>)
  }


  function Home(){
    return(<h3>Home Page</h3>)
  }

  function About(){
    return(<>
      <h2>About Page</h2>
      <Routes>
          <Route path="company" element={<Company></Company>}></Route>
          <Route path="Founder" element={<Founder></Founder>}></Route>
      </Routes>
    </>)
  }

  function Company(){
    return(<h2>Congratulations!!! You are the part of NxtWave</h2>);
  }

  function Founder(){
    return(<h2>Founder is Rahul Attluri</h2>)
  }

  function Listings(){
    return(<h3>Listings Page</h3>)
  }

  function PageNotFound(){
    return(<h3>Page Not Found</h3>)
  }
}

export default Routing