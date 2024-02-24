import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const inputRef = useRef(null);
  useLayoutEffect(()=>{
    console.log(inputRef.current.value)
  }, [])

  useEffect(()=>{
    inputRef.current.value = 'HELLO';
  }, [])
  return (
    <>
    <h1>UseLayoutEffect Hook</h1>
      <input type="text" ref={inputRef} value="ROJESH" style={{width: 400, height: 100}} />
    </>
  );
};

export default UseLayoutEffect;
