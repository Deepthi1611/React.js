import {useState, useEffect} from 'react'
import {ToDoProvider} from './contexts/index'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'

function App() {

  const [toDos, setToDos] = useState([])

  const addToDo = (toDo) => {
    console.log({id: Date.now(), ...toDo})
    setToDos((toDos) => [{id: Date.now(), ...toDo}, ...toDos])
  }

  const updateToDo = (id, toDo) => {
    setToDos((toDos) => toDos.map((prevToDo) => prevToDo.id === id ? toDo : prevToDo))
  }

  const deleteToDo = (id) => {
    setToDos((toDos) => toDos.filter((prevToDo) => prevToDo.id !== id))
  }

  const toggleComplete = (id) => {
    setToDos((toDos) => toDos.map((prevToDo) => prevToDo.id === id ?
     {...prevToDo, completed: !prevToDo.completed} : prevToDo))
  }

  useEffect(()=> {
    const toDos = JSON.parse(localStorage.getItem("toDos"))
    if(toDos && toDos.length) setToDos(toDos)
  }, []) 

  useEffect(()=>{
    localStorage.setItem("toDos", JSON.stringify(toDos))
  },[toDos])

  return (
    <ToDoProvider value={{toDos, addToDo, updateToDo, deleteToDo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* () don't need return keyowrd, {} needs return keyword */}
                        {
                          toDos.map((toDo) => (
                            <div key={toDo.id}
                            className='w-full'
                            >
                              <TodoItem todo={toDo} />
                            </div>
                          ))
                        }
                    </div>
                </div>
    </div>
    </ToDoProvider>
  )
}

export default App
