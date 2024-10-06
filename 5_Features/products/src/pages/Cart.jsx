import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux'
function Cart() {
  const productList = useSelector((store)=>{return store.cartReducer.cartProduct})
 
  return (
    <>
      <h1>Cart</h1>
      <h2>Add to Product List Below</h2>
      <ProductList productList={productList}></ProductList>
    </>
  )
}

export default Cart