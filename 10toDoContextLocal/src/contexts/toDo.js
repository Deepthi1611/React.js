import {createContext, useContext} from 'react'

// context
export const toDoContext = createContext({
    toDos: [
        {
            id:1,
            toDo: 'to do 1',
            completed: false
        }
    ],
    addToDo: (toDo) => {},
    updateToDo: (id, toDo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {}
})

// context provider
export const ToDoProvider = toDoContext.Provider

// custom hook
export const useToDo = () => {
    return useContext(toDoContext)
}