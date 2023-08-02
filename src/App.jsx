import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sec01 from './comp/Sec01'
import Detail01 from './comp/Detail01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Detail01 />
  )
}

export default App
