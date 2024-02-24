import React, { useContext } from 'react'
import { AppContext } from './Context'

const User = () => {
  const {username} =useContext(AppContext)

  return (
    <div>
      <h3>User: {username}</h3> 
    </div>
  )
}

export default User
