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

    // setCounter(counter+1) 
    //  whenever counter is updated, React updates all the place wherever counter state is used

    // if setCounter(counter + 1) is used successively it stills results in adding a single number to counter
    // This is because useState uses batching and it is asynchronous in nature
    // It batches all four statements and possibility is that it executes only single seCounter as all the statements are same
    // useState is asynchronous, so it may not get the updated counter value while calling setCounter multiple times
    // so, to overcome this issue, we use callback function in setCounter so that the callback function waits until the correct counter value is obtained
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
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
