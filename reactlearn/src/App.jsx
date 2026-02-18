import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // useState is a hook in react which is used to manage the state of a component. It returns an array with two elements, 
  // the first element is the current state and the second element is a function that can be used to update the state. 
  // The useState hook takes an initial value as an argument and returns the current state and a function to update it.
  let [counter,setCounter]=useState(10)
  const addValue=()=>{
    if(counter>=20){
      alert("counter value is greater than 20")
      return;
    }
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // the above code will not work because the state updates are asynchronous and they are batched together.
    // to solve this problem we can use the functional update form of the setState function which takes a function as an argument and the function receives the previous state as an argument and returns the new state.
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }
  const removeValue=()=>{
    if(counter<=0){
      alert("counter value is less than 0")
      return;
    }
    setCounter(counter-1)
  }
  return (
    <>
    <h1>{counter}</h1>
    <button
    onClick={addValue}
    >add value</button>
    <button 
    onClick={removeValue}>
      remove value</button>
      
    </>
  )
}

export default App
