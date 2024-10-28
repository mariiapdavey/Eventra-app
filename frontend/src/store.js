import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})

const cartItemsFromStorage = localStorage.getItem
('cartItems') ? JSON.parse(localStorage.getItem
('cartItems')) : []

const userInfoFromStorage = localStorage.getItem
('userInfo') ? JSON.parse(localStorage.getItem
('userInfo')) : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const store = configureStore ({
    reducer: rootReducer,
    preloadedState: initialState    
})

export default store    