import {configureStore, combineRreducers} from '@reduxjs/toolkit'
import { eventListReducer } from './reducers/eventReducers'

const rootReducer = combineRreducers({
    eventList: eventListReducer
})

const store = configureStore ({
    reducer: rootReducer,
    preloadedState: {}
})

export default store    