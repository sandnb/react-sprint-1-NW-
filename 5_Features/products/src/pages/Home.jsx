import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import basicOps from '../utility/basicOps';
import { usePaginationContext } from '../contexts/PaginationContext';



function Home() {
    /* state - term with whihc you want to filter the productList*/
    const [searchTerm, setSearchTerm] = useState("");
       /* single source of truth for all the products*/
    const [products, setProducts] = useState([]);
    /* sort:0 : unsorted, 1: increasing order, -1:decreasing order*/
    const [sortDir,setSortDir] = useState(0);
    /* all the categories -> product*/
    const [categories,setCategories] = useState([]);
    /* currCategory : category group by your result */
    const [currCategory,setCurrCategory] = useState("All categoris");

    const { pageSize,pageNum,
        setPageNum,
        setPageSize } = usePaginationContext();
   

    /* this is used to fetch the products*/
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products`)
            const productData = await resp.json();
            // productData.forEach((elem)=>
            // console.log(elem.title));
            //console.log(productData);
            setProducts(productData);
        })()
    }, []);

    /* used to fetch the categories
    fetch the categories ->api->dynamic 
    */
    useEffect(()=>{
        (async function(){
            const resp = await fetch('https://fakestoreapi.com/products/categories');
            const categoriesData = await resp.json();
            //console.log(categoriesData);
            setCategories(categoriesData);
        })()
    },[])

    const object = basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize);
    const filteredSortedgroupByArr = object.filteredSortedgroupByArr;
    const totalPages = object.totalPages;

    return (
        <>
            <header className="nav_wrapper">
                <div className='search_sortWrapper'>
                    <input
                        className='search_input'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value)
                            setPageNum(1);
                         }} />
                        <div className="icons_container">
                            <FaArrowAltCircleUp  style={{color:"white"}} fontSize="large"
                            onClick={()=>{setSortDir(1) 
                                setPageNum(1);
                            }}/>
                            <FaArrowAltCircleDown style={{color:"white"}} fontSize="large"
                            onClick={()=>{setSortDir(-1)
                                setPageNum(1);
                            }}/>
                        </div>
                </div>
                <div className="catagories_wrapper">
                   <Categories categories={ categories }
                               setCurrCategory={setCurrCategory}
                               ></Categories>
                </div>
            </header>

            <main className="product_wrapper">
                {/* products will be there */}
               <ProductList productList={ filteredSortedgroupByArr }></ProductList>
            </main>
            {/* pagination */}
            <div className='pagination'>
                <button onClick={()=>{
                    if(pageNum == 1)
                        return 
                    setPageNum((pageNum)=>pageNum - 1);
                    }}
                    disabled={pageNum == 1 ? true : false}
                >
                    <MdKeyboardArrowLeft fontSize="large"></MdKeyboardArrowLeft>
                </button>
                <div className='pagenum'>
                    {pageNum}
                </div>
                <button onClick={()=>{
                    if (pageNum == totalPages)
                        return 
                    setPageNum((pageNum)=>pageNum + 1)
                    
                }}
                disabled = {pageNum == totalPages ? true : false}
                >
                    <MdKeyboardArrowRight fontSize="large">

                    </MdKeyboardArrowRight>
                </button>
            </div>
        </>

    )
}

export default Home

/*
    we have 20 elements ,
    if i render 5 elements per page , pages?
    we also have pagenum for each page
*/