import Header from '../Partial/Header'
import Footer from '../Partial/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='bg-gray-200'>

          <Header /> 

            <Outlet context={ {user: "KingHard-Hierarchy"} }/>

          <Footer />

    </div>
  )
}

export default RootLayout
