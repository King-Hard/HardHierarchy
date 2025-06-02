import { useEffect, useState, useRef} from "react"

const Home = () => {
    const [count, setCount] = useState(0)
    const buttonRef = useRef(null)

    useEffect(() => {
        if(buttonRef.current){
            setTimeout(() => {
                buttonRef.current.style.display = "none"
            }, 4000)
        }
    })

    return(
        <>
    
            <div className='bg-violet-300 p-5 flex justify-center min-h-screen items-center'>
                Welcome back
            </div>
    
            <div className="flex space-x-10">
                <span>Count: {count}</span>
                <button ref={buttonRef} className="border" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    )
}

export default Home