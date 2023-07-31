import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sec01 from './comp/Sec01'
import Detail from './comp/Detail01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Sec01 /> */}
      <Detail />
    </div>
  )
}

export default App
