import React, { useState, createContext } from 'react'
import Login from './Login';
import User from './User';

export const AppContext = createContext();

const Context = () => {
  const [username, setUsername] = useState("");
  const send = {username, setUsername}
  return (
    <AppContext.Provider value={send}>
      <h1>UseContext Hook</h1>
      <Login />
      <User />
    </AppContext.Provider>
  )
}

export default Context
