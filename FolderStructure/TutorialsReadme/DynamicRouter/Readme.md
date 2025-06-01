# Dynamic Router

Step 1. Imagine meron tayong Home.jsx

const Home = () => {
    return(
        <>
            <div className='bg-red-300 border'>Home Page</div>
        </>
    )
}

export default Home

Step 2. Bago tayo makapag-link ng kaylangan muna natin gawin yung static route example meron tayong 

import Home from './Pages/Home'
<route path="/Home" element={Home /}/>

Step 3. then ili-link natin sya using

import { Link } from 'react-router-dom'
<link to="/Home">Home Page</Link>



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
