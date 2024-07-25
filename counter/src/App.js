import {useState} from 'react'


function App() {

  // let counter = 10

  //using state instead of variable
  let [counter,setCounter] = useState(10)

  const addValue = () => {
    // counter += 1
    // counter gets updated but this value will not get updated in UI if that is a variable
    //  To update the data in UI, we use hooks
    // UI updation is taken care by React

    setCounter(counter+1) 
    //  whenever counter is updated, React updates all the place wherever counter state is used
  }

  const subtractValue = () => {
    setCounter(counter-1)
  }
  
  return (
    <>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>click to add</button>
    <br></br> <br></br>
    <button onClick={subtractValue}>click to subtract</button>
    </>
  );
}

export default App;
