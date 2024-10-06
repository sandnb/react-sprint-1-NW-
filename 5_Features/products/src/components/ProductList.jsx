import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { action } from "../redux/slices/cartSlice";
import { useDispatch, useSelector} from 'react-redux';

function ProductList(props) {
    const { productList } = props;
    const cartProducts = useSelector((store)=>{return store.cartReducer.cartProducts})
    const dispatch = useDispatch();
    const handleAddProduct = (product) =>{
        dispatch(action.addToCart(product));
    };
    const handleRemoveProduct = (product) =>{
        dispatch(action.deleteFromCart(product));
    };
  return (
    <>
         { productList == null ? <h3> Loading...</h3> :
                    productList.map((product) => {
                        return (<div className="product" key={product.id}>
                            <img src={product.image} 
                                className='product_image' />
                            <div className="product_meta">
                                <p className="product_title">{product.title}</p>
                                <p className='Price'>$ {product.price}</p>
                            </div>
                            <div className="add_to_cart_container">
                            <FaSquareMinus fontSize="large" onClick={handleRemoveProduct(product)}/>
                                <div className="currentCartCount">
                                    {<PrintCount cartProducts={cartProducts} id={product.id}></PrintCount>}
                                </div>
                                <FaSquarePlus fontSize="large" onClick = { handleAddProduct(product) }/>
                            </div>
                        </div>
                        )
                    })}
    </>
  )
}

function PrintCount(props){
    const {cartProducts , id} = props;
    let quantity  = 0;
    for(let i=0;i < cartProducts.length; i++){
        if(cartProducts[i].id== id){
            quantity = cartProducts[i].indQuantity;
        }
    }
    return (<>{quantity}</>)
}

export default ProductList