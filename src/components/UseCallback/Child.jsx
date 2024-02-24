import React, { useEffect } from 'react'

const Child = ({returnComment}) => {
  useEffect(()=>{
    console.log("Function called")
  }, [returnComment])
  return (
    <div>
      {returnComment("Roo")}
    </div>
  )
}

export default Child
