import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserMiddleWare } from '../../redux/middleware/userMiddleWare';

function UserRedux() {
   const { loading,error,user } = useSelector((store)=>{return store.userState });

   const dispatch = useDispatch();
   //1
   useEffect(function(){
        dispatch(fetchUserMiddleWare);
   },[]);// once intial render happens, then i just want to ask middleware for data at api
   

    const heading = <h2>User Examples</h2>;

    if(loading){
        return<>{heading}
                <h3>...Loading</h3>
        </>
    }
    if(error){
        return<>{heading}
                <h3>Error</h3>
        </>
    }

  return (
    <>
        {heading}
        <h4>Name: {user.name}</h4>
        <h4>Phone: {user.phone}</h4>
    </>
  )
}

export default UserRedux