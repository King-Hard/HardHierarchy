import RootLayout from './Shared/Layout/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cars from './Pages/Cars'
import Car from './Pages/Car'
import AddCar from './Components/CarsFolder/AddCar'

const App = () => {
  return (
    <RootLayout>   
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Cars/:id" element={<Car />} />
        <Route path="/Cars/AddCar" element={<AddCar />} />
      </Routes>
    </RootLayout>
  )
}

export default App 
