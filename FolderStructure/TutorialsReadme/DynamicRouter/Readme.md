# Dynamic Router

1, Linking files

<link> to="/Cars"> Car Page </link>

2, <Route path="/Cars" element={<Cars />} />
   <Route path="/Cars/:id" element={<Car />} />

3, import { Link } from 'react-router-dom'

const Cars = () => {
    return(
    
            <div className="bg-green-300 p-3 space-x-15">
                <Link to="/Cars/McLaren">McLaren</Link>
                <Link to="/Cars/Ferrari">Ferrari</Link>
                <Link to="/Cars/Lamborghini">Lamborghini</Link>
            </div>
    
    )
}

export default Cars

4, import { useParams } from "react-router-dom"

const Car = () => {
    const { id } = useParams()

    return(
        <>
        
            <div>
                This is Car Page with an id of {id}
            </div>
        
        </>
    )
}

export default Car
