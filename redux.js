import {legacy_createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";

// reducer
const cartReducer = (
    state ={
    // login: false,
    cart : [{id: 1, qty: 10}]
}, action) => {
     switch(action.type){
        case "ADD_TO_CART":
        return {
            ...state,
            cart : [...state.cart, action.payload]
        };
        default:
            return state; // keadaan default/utama

    }
}

// store
const store = legacy_createStore(cartReducer);
console.log("oncreate store", store.getState());


// subscribe
store.subscribe(() => {
    console.log("Store Change : ", store.getState())
})

// dispatch
const action1 = {
    type : "ADD_TO_CART",
    payload : {
        id: 2,
        qty: 20
    }
}
const action2 = {
    type : "ADD_TO_CART",
    payload : {
        id: 3,
        qty: 26
    }
}

store.dispatch(action1);
store.dispatch(action2)