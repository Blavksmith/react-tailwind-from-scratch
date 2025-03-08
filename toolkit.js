// cara ribet asli cuyyy

// import toolkit from "@reduxjs/toolkit";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const {configureStore, createAction, createReducer} = toolkit;

const addToCart = createAction("ADD_TO_CART");

// const initialState = {
//     cart: []
// };

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
        // state.cart = [...state.cart, action.payload]; => cara ini jg bisa
    })
});

const login = createAction("LOGIN")

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    })
})

const store = configureStore({
    reducer: { 
        login: loginReducer, 
        cart: cartReducer,
    }
})
console.log("oncreate store", store.getState());

//subscribe
store.subscribe(() => {
    console.log("store changed", store.getState())
})


// dispatch
const action1 = addToCart({
    id: 2,
    qty: 20
})


store.dispatch(action1);
store.dispatch(login());