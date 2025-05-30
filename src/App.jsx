import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>

      <div className='bg-gray-200 flex items-center justify-center min-h-screen'>
        <div className='border p-7 rounded-xl bg-white shadow-lg w-100'>
          <button onClick={increment} className='border rounded p-2 bg-green-300'>Increment</button>

          <div className='border rounded bg-red-300 p-2 w-25 float-end'>Count: {count}</div>
        </div>
      </div>

    </>
  )
}

export default App
