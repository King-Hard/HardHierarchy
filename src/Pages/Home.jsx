import { useOutletContext } from "react-router-dom"

const Home = () => {
    const {user} = useOutletContext()

    return(
        <>
    
            <div className="bg-violet-300 p-5">
                Welcome back {user}
            </div>
    
        </>
    )
}

export default Home