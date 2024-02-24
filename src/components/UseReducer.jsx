import React, { useReducer } from 'react'

const reducerFunction = (states, action) =>{
  switch(action.type){
    case "INCREMENT":
      return {count: states.count+1, showText: states.showText}
    
    case "toggleShowText":
      return {count: states.count, showText: !states.showText}
    
    default:
      return states
  }
  
}

const UseReducer = () => {
  const [states, dispatch] = useReducer(reducerFunction, {count:0, showText:true});
  return (
    <div>
      <h1>UseReducer Hook</h1>
      <h4>{states.count}</h4>
      <button onClick={()=>{
        dispatch({type: "INCREMENT"});
        dispatch({type:"toggleShowText"});
      }}>Toggle Text, Increase Count</button>
      {states.showText && <h4>This is a text</h4>}
    </div>
  )
}

export default UseReducer
