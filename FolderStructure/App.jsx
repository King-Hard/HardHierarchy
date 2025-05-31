import RootLayout from './Shared/Layout/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const FirstApp = () => {
    return(
        <RootLayout>
            <Routes>
                <Route path='/Home' element={<Home />}/>
                <Route path='/About' element={<About />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </RootLayout>
    )
}

export default FirstApp