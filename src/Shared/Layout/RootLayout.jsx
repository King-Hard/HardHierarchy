import Header from '../Partial/Header'
import Footer from '../Partial/Footer'
import { Link } from 'react-router-dom'

const RootLayout = ({children}) => {

  return (
    <>

      <div class="root-main" className='bg-gray-200 flex items-center justify-center min-h-screen'>
        <div className='border p-7 rounded-xl bg-white shadow-lg w-100'>
          <div className='space-x-10 p-2'>
            <Link to="/Home">Home Page</Link>
            <Link to="/About">About Page</Link>
            <Link to="/Cars">Cars Page</Link>
          </div>

          <Header />

            {children}

          <Footer />
        </div>
      </div>

    </>
  )
}

export default RootLayout
