import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    item: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200,
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCartItem:(state,action) => {
            const newProduct = action.payload.product
            const cartItem = state.item.find((item) => item.product.id === newProduct.id)

            if(cartItem) {
                cartItem.quantity += 1;
            } else {
                state.item.push({
                    product: newProduct,
                    quantity: 1
                })
            }

        },
        changeQuantity:(state,action) => {
            const { productId, amount }  =action.payload
            const cartItem = state.item.find(
                (item) => item.product.id === productId
            )

            if(cartItem){
                cartItem.quantity += amount
            }

            if(cartItem.quantity <= 0) {
                state.item = state.item.filter((item) => item !== cartItem)
            }
        },
    }
}) 

export const { addCartItem,changeQuantity } = cartSlice.actions;