import {configureStore} from '@reduxjs/toolkit'
// import reducers
import toDoReducer from '../features/toDo/toDoSLice'

export const store = configureStore({
    // add reducers to store
    reducer: toDoReducer
})