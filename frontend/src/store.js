import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer
})

const store = configureStore ({
    reducer: rootReducer,
    preloadedState: {}
})

export default store    