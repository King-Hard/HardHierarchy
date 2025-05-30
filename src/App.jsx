import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-2xl text-red-500 bg-red-100">
      Hello World
    </div>
  )
}

export default App
