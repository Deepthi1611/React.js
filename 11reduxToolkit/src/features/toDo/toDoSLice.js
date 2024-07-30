import {createSlice, nanoid} from '@reduxjs/toolkit'
// nanoid generates unique id

const initialState = {
    toDos: [{id:1, text:'hello world'}]
}


const toDoSlice = createSlice({
    name: 'toDo', // first parameter is name
    initialState, // second parameter is initial state
    reducers: { // third parameter is reducers
        addToDo: (state, action) => { // state and action are the parameters of reducer functions
            const toDo = {
                id:nanoid(), 
                text:action.payload
            }
            state.toDos.push(toDo)
        },
        removeToDo: (state, action) => {
            state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload)
        }
    }
})

// for components - to work with state using reducers
export const {addToDo, removeToDo} = toDoSlice.actions

// for store - to add reducers to store
export default toDoSlice.reducer