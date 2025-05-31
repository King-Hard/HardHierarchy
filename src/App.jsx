import RootLayout from './Shared/Layout/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cars from './Pages/Cars'

const App = () => {
  return (
    <RootLayout>   
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
      </Routes>
    </RootLayout>
  )
}

export default App
