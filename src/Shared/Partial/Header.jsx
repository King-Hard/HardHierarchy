import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>

        <div className='border p-7 rounded-xl rounded-t-none bg-white shadow-lg w-full flex justify-between'>
          <div className='p-2'>Header</div>
          <div className='space-x-10 p-2'>
            <Link to="/Home" className='hover:text-violet-300'>Home Page</Link>
            <Link to="/About" className='hover:text-red-300'>About Page</Link>
            <Link to="/Cars" className='hover:text-green-300'>Cars Page</Link>
          </div>
        </div>

    </>
  )
}

export default Header
