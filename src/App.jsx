import React from 'react'
import UseState from './components/UseState'
import UseReducer from './components/UseReducer'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseLayoutEffect from './components/UseLayoutEffect'
import Context from './components/UseContext/Context'
import Memo from './components/UseMemo/Memo'
import Callback from './components/UseCallback/Callback'

const App = () => {
  return (
    <div>
      <UseState/>
      <UseReducer/>
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <Context />
      <Memo/>
      <Callback/>
    </div>
  )
}

export default App
