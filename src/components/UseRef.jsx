import React, { useRef, useState } from 'react'

const UseRef = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState("UseRef Hook")


  const onClick =()=>{
    setData(() => inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <>
      <h1>{data}</h1>
      <input type="text" placeholder='Ex..' ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </>
  )
}

export default UseRef;