import { useState, useRef } from 'react'


const About = () => {

    const [count, setCount] = useState(0)
    const intervalRef = useRef(null)

    const handleStart = () => {
        if(intervalRef.current) return
            intervalRef.current = setInterval(() => {
                setCount(prev => prev + 1)
        }, 1000)
    }
    
    const handleReset = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setCount(0)
    }

    const handlePause = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }
    
    return(

        <>

            <div className="bg-red-300 p-5">
                About Page
            </div>
    
            <div>
                <span>Timer: {count}</span>

                <div className='flex gap-2'>
                    <button className='border' onClick={handleStart}>Start</button>
                    <button className='border' onClick={handleReset}>Reset</button>
                    <button className='border' onClick={handlePause}>Pause</button>
                </div>
            </div>
        </>
    )
}

export default About