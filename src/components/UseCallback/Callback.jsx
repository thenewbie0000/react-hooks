import React, { useCallback, useState } from 'react'
import Child from './Child';

const Callback = () => {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState("How you doin'? ");

  const returnComment = useCallback((name)=>{
    return data + name;
  },[data])
  return (
    <>
      <h1>UseCallback Hook</h1>
      <Child returnComment={returnComment}/>

      <button onClick={()=>{
        setToggle(!toggle);
      }}>
        {" "} Toggle
      </button>
      {toggle && <h2>Toggle Here</h2>}
    </>
  )
}

export default Callback