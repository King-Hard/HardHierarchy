# OutletContext

Step 1: Sa Outlet natin don sa RootLayout maglagay lang tayo ng context. Example context: {{user: "Hard}}

Example:
import Header from '../Partial/Header'
import Footer from '../Partial/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>

          <Header />  

            <Outlet //context: {{user: "Hard"}}/>

          <Footer />

    </>
  )
}

export default RootLayout

Step 2: Ngayon pwede na natin magamit yung context natin na may lamang user. Gawin lang natin import yung {useOutletContext} kung saang page natin sya gagamitin, then lagay na natin sya sa loob bago mag return. const {user} = useOutletContext() kumbaga kung ano yung gagamitin natin na context is ilalagay lang nati don sa loob ng const natin> After non pwede na natin sya gamitin using {user}

Example:
//import {useOutletContext} from 'react-router-dom'

const Home = () => {
    //const { user } = useOutletContext()

    return(
        <div> Welcome back {user} </div>
    )
}

export default Home

3, Sa lahat ng sakop nung RootLayout natin don sa Route is pwede natin lagyan ng context na ginawa natin don sa loob ng RootLayout natin
