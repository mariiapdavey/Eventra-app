import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer
})

// Wrap in try/catch to handle potential errors with localStorage
let cartItemsFromStorage = [];
try{
   cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
} catch (error) {

    console.error('Error reading cart items from localStorage:', error);
}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage || [],
    }
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState    
})

export default store    