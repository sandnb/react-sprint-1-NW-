import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

function inComparator(product1,product2){
    if(product1.price > product2.price){
        return 1
    }else{
        return -1
    }
}

function decComparator(product1,product2){
    if(product1.price < product2.price){
        return 1
    }else{
        return -1
    }
}

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState(null);
    const [sortDir,setSortDir] = useState(0);
    const [categories,setCategories] = useState([]);
    const [currCategory,setCurrCategory] = useState("All categoris");

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

    //fetch the categories ->api->dynamic
    useEffect(()=>{
        (async function(){
            const resp = await fetch('https://fakestoreapi.com/products/categories');
            const categoriesData = await resp.json();
            //console.log(categoriesData);
            setCategories(categoriesData);
        })()
    },[])

    /* Filtering->hiding the elements */
    let filterdArr = products;
    if(searchTerm != ""){
        filterdArr = filterdArr.filter((product)=>{
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
            // lowerSearchTerm = mens
        })
    }

    /* Sorting -> rearraging */
    let filteredSortedArr = filterdArr;
    if(sortDir != 0){
        //increasion
            if(sortDir == 1){
                    filteredSortedArr = filteredSortedArr.sort(inComparator);
            }else{
                    filteredSortedArr = filteredSortedArr.sort(decComparator)
            }
    }
    /* Categorization*/
    let filteredSortedgroupByArr = filteredSortedArr;
    if(currCategory != "All categoris"){
        filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product)=>{
            return product.category == currCategory
        });
    }
    return (
        <>
            <header className="nav_wrapper">
                <div className='search_sortWrapper'>
                    <input
                        className='search_input'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }} />
                        <div className="icons_container">
                            <FaArrowAltCircleUp  style={{color:"white"}} fontSize="large"
                            onClick={()=>{setSortDir(1)}}/>
                            <FaArrowAltCircleDown style={{color:"white"}} fontSize="large"
                            onClick={()=>{setSortDir(-1)}}/>
                        </div>
                </div>
                <div className="catagories_wrapper">
                    <button className="category_option">
                        All Categories</button>
                    {categories.map((category)=>{
                        return <button 
                        className="category_option"
                        onClick={()=>{
                            setCurrCategory(category);
                         //   console.log(category);
                        }}>{category}</button>
                    })}
                </div>
            </header>

            <main className="product_wrapper">
                {/* products will be there */}
                { filteredSortedgroupByArr == null ? <h3> Loading...</h3> :
                     filteredSortedgroupByArr.map((product) => {
                        return (<div className="product">
                            <img src={product.image} alt=""
                                className='product_image' />
                            <div className="product_meta">
                                <p className="product_title">{product.title}</p>
                                <p className='Price'>$ {product.price}</p>
                            </div>
                        </div>
                        )
                    })}
            </main>
        </>

    )
}

export default Home
    ;


