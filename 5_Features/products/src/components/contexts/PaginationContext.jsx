import React from "react";
import {useState, useContext} from "react";


const PaginationContext = React.createContext();


export default function PaginationProvider({children}){
    const [pageSize,setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);
    const pageProps = {
        pageSize,pageNum,
        setPageNum,
        setPageSize,
    }
    return <PaginationContext.Provider value={pageProps}>
                {children}
           </PaginationContext.Provider>
}

// customHook
export const usePaginationContext =()=>{
    return useContext(PaginationContext)
}