import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer } from './reducers/eventReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer
})

const store = configureStore ({
    reducer: rootReducer,
    preloadedState: {}
})

export default store    