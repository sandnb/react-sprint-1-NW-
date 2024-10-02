import React, { useState, useEffect } from 'react'

function Home() {
  const [searchTerm,setSearchTerm]=useState("");
  const [products,setProdcuts] = useState([]);
  useEffect(()=>{
    (async function (){
      const resp = await fetch(`https://fakestoreapi.com/products`)
      const productData = await resp.json();
      setProdcuts(productData);
    })()
  },[]);
  return (
    <>
      <header className="nav_wrapper">
        <input 
            className="search_input"
            type='text'
            value={searchTerm}
            onChange={(e)=>{ setSearchTerm(e.target.value)}} />
      </header>
      <main className="product_wrapper">
        {products.length == 0 ? <h2>Loading....</h2>:products.map((product)=>{
            return(<div className="product">
              <img src={product.image} alt="prodcut_img"
               className='product_image'/>
               <div className = "product_meta">
                  <p className='product_title'>{product.title}</p>
                  <p className='price'>{product.price}</p>
               </div>
            </div>)
          })
          }
      </main>
    </>
  )
}

export default Home