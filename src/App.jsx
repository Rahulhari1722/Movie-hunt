import { useState } from 'react'

import './App.css'
import {AllRoutes} from './routes/AllRoutes'
import{Header,Footer} from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header/>
        <AllRoutes/>
        <Footer/>
      </div>
    
    
  )
}

export default App
