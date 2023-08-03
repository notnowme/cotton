import { useState } from 'react'
import './App.css'
import Sec01 from './comp/Sec01'
import Card from './comp/Detail01/Card'
import Nav from './comp/Nav/Nav'
import TTT from './comp/Test'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Nav />
      <Sec01 />
      <Card /> */}

      <TTT />


    </>
  )
}

export default App
