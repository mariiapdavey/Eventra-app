import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,  
    userRegister: userRegisterReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer, //added
    userDetails: userDetailsReducer, //added
    userUpdateProfile: userUpdateProfileReducer
})

const cartItemsFromStorage = localStorage.getItem
('cartItems') ? JSON.parse(localStorage.getItem
('cartItems')) : []

const userInfoFromStorage = localStorage.getItem
('userInfo') ? JSON.parse(localStorage.getItem
('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem
('shippingAddress') ? JSON.parse(localStorage.getItem
('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem
('paymentMethod') ? JSON.parse(localStorage.getItem
('paymentMethod')) : {}

const initialState = {
    cart: {
         cartItems: cartItemsFromStorage,
         shippingAddress: shippingAddressFromStorage,
         paymentMethod: paymentMethodFromStorage
        },
    userLogin: {userInfo: userInfoFromStorage}, 
    userDetails: { user: {}}
}

const store = configureStore ({
    reducer: rootReducer,
    preloadedState: initialState    
})

export default store    