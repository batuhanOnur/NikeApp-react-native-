import { createSlice, createSelector } from '@reduxjs/toolkit'


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

export const selectNumberOfItems = (state) => state.cart.item.length

export const selectSubTotal = (state) => state.cart.item.reduce(
    (sum,cartItem) => sum + cartItem.product.price * cartItem.quantity,0
)

const cartSelector = (state) => state.cart

export const selectDeliveryPrice = createSelector(
    cartSelector,
    selectSubTotal,
    (cart,subTotal) => subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee
)

export const selectTotal = createSelector(
    selectSubTotal,
    selectDeliveryPrice,
    (subtotal,deliveryPrice) => subtotal + deliveryPrice
)

export const { addCartItem,changeQuantity } = cartSlice.actions;