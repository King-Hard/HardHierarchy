import RootLayout from './Shared/Layout/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cars from './Pages/Cars'
import Car from './Pages/Car'
import AddCar from './Components/CarsFolder/AddCar'
import NotFound from './Pages/NotFound'
import Timer from './Pages/Timer'
import Practice from './use'

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
          <Route path="/Practice" element={<Practice />}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Cars/:id" element={<Car />} />
          <Route path="/Cars/AddCar" element={<AddCar />} />
          <Route path="/Timer" element={<Timer />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App 
