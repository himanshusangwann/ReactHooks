import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Use_state from './components/Use_State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Lets Learn React Hook
      <Use_state/>
    </>
  )
}

export default App
