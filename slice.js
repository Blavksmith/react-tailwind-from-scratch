// import toolkit from '@reduxjs/toolkit';
// const {configureStore, createSlice} = toolkit;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

console.log("oncreate store", store.getState());

//subscribe
store.subscribe(() => {
    console.log("store changed", store.getState())
})

// .actions sama seperti createAction
store.dispatch(cartSlice.actions.addToCart({id:1, qty: 20}))
