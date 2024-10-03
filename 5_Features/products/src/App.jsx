import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from './components/PageNotFound'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails'
import User from './components/User'
import Cart from './components/Cart'
import PaginationProvider from './components/contexts/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes>
    </PaginationProvider>

  )
}

export default App
