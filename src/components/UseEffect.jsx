import React, { useEffect, useState } from 'react';
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        setData(response.data[0].email)
      });
  }, []);
  
  
  return (
    <>
      <h1>Use Effect Hook</h1>
      {data}
      
    </>
  )
}

export default UseEffect
