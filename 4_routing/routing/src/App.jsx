import NavBar from './components/NavBar'
import Home from './components/Home'
import Product from './components/Product'
import ProductDetails from './components/ProdcutDetails'
import PageNotFound from './components/PageNotFound'
import {Route, Routes, Navigate} from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
