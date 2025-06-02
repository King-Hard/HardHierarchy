import {useRef, useState} from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)
    const intervalRef = useRef(null)

    const start = () =>{
        if(intervalRef.current) return
            intervalRef.current = setInterval(() =>{
                setCount(prev => prev + 1)
            }, 1000)
    }
    const reset = () =>{
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setCount(0)
    }
    const pause = () =>{
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }
    return(

        <div className="flex justify-center min-h-screen items-center font-medium">
            <div className='space-x-5 space-y-10'>
                
                <p className='bg-violet-200 w-full border rounded-lg p-10 text-xl'>Timer: {count}</p>

                <button className='rounded p-3 w-30 bg-green-300 hover:bg-green-500' onClick={start}>Start</button>
                <button className='rounded p-3 w-30 bg-blue-300 hover:bg-blue-500' onClick={pause}>Pause</button>
                <button className='rounded p-3 w-30 bg-red-300 hover:bg-red-500' onClick={reset}>Reset</button>
                
            </div>
        </div>

    )
}

export default Timer