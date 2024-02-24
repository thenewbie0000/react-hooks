import React, { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");


  const increaseValue = ()=>{
    setCounter(counter+1);
  }
  
  const displayInputValue = (e)=>{
    setInput(e.target.value)
  }
  return (
    <div>
      <h1>UseState Hook</h1>
      {counter}
      <button onClick={increaseValue}>Click</button>

      <br />
      <input type="text" placeholder='Enter something...' onChange={displayInputValue}/>
      {input}
    </div>
  )
}

export default UseState
