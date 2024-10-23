import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

// Log cartItems for debugging
console.log(cartItemsFromStorage);

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage || []
    }
}

const store = configureStore ({
    reducer: rootReducer,
    preloadedState: initialState    
})

export default store    