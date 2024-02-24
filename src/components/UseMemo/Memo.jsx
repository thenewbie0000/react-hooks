import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        setData(response.data)
      });
  }, []);

  const findLongestName = (comments)=>{
    if(!comments) return;

    let longestName = '';
    for (let index = 0; index < comments.length; index++) {
      let currentName = comments[index].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    return longestName;
  };

  const getLongestName = useMemo(()=>findLongestName(data), [data])

  return (
    <>
      <h1>UseMemo Hook</h1>
      <div>{getLongestName}</div>
      <button onClick={()=>{
        setToggle(!toggle);
      }}>
        {""} Toggle
      </button>
      {toggle && <h3>Toggle here</h3>}
    </>
  )
}

export default Memo
