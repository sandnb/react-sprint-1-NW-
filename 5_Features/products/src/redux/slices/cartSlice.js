import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        // array of objects  -> {details of product , individual quantity of each}
        cartProducts:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartQuantity +=1;
            // we are getting a product from ProductList component
            const productToBeAdded = action.payload;
            // before adding that product blindly into the cart, i am checking if it is
            // already present or not in cartProduct array. if not present i will newly
            //add the product into the cartProduct array,if already present, i will increment
            // quantity value.so here only checking happens
            const requiredProduct = state.cartProducts
                    .find((cProduct)=>{return cProduct.id == productToBeAdded.id });
            if(requiredProduct == undefined){
                // here i am initializing the a property for this array 
                productToBeAdded.indQuantity = 1
                state.cartProducts.push(productToBeAdded)
            }else{
                requiredProduct.indQuantity++;
            }
        },
        deleteFromCart:(state,action)=>{
                const productToBeAdded = action.payload;
                const productIdx = state.cartProducts
                                .findIndex((cProduct)=>{ return cProduct.id == productToBeAdded.id });
                if(productIdx == -1){

                }else{
                   
                    let product  = state.cartProducts[productIdx];
                    if(product.indQuantity == 0){
                        state.cartProducts.splice(productIdx, 0);
                    }else{
                        state.cartProducts[productIdx].indQuantity-=1;
                        state.cartQuantity-=1;
                    }

                }
        },  
    }
});


export const action = cartSlice.actions;
export default cartSlice;