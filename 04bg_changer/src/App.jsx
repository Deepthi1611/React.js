import { useState } from "react"

function App() {

  const [colour, setColour] = useState('olive')

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'red'}}
          onClick={() => setColour('red')}
          // onclick expects a function
          >Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'green'}}
          onClick={() => setColour('green')}
          >Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'blue'}}
          onClick={() => setColour('blue')}
          >Blue</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'olive'}}
          onClick={() => setColour('olive')}
          >Olive</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'grey'}}
          onClick={() => setColour('grey')}
          >Grey</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'yellow', color: "black"}}
          onClick={() => setColour('yellow')}
          >Yellow</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'pink', color: "black"}}
          onClick={() => setColour('pink')}
          >Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'purple'}}
          onClick={() => setColour('purple')}
          >Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'lavender', color: "black"}}
          onClick={() => setColour('lavender')}
          >Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'white', color: "black"}}
          onClick={() => setColour('white')}
          >White</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'black'}}
          onClick={() => setColour('black')}
          >Black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
