import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sec01 from './comp/Sec01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sec01 />
    </div>
  )
}

export default App
