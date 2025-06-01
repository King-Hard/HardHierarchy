import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <>

            <div className='flex justify-center min-h-screen items-center text-2xl'>
                 <div className='flex space-x-3'>
                    <span>This URL not found.</span>
                    <Link to="/Home" className='text-blue-500 underline'>Go back home</Link>
                </div>
            </div>

        </>
    )
}

export default NotFound