import { Link } from 'react-router-dom'

const Cars = () => {
    return(
    
            <div className="bg-green-300 p-3 space-x-15">
                <Link to="/Cars/AddCar" className='hover:text-bl'>Add Car</Link>

                <Link to="/Cars/McLaren">McLaren</Link>
                <Link to="/Cars/Ferrari">Ferrari</Link>
                <Link to="/Cars/Lamborghini">Lamborghini</Link>
            </div>
    
    )
}

export default Cars