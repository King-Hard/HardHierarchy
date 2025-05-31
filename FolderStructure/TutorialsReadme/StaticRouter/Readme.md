# React Router v6: Static Routers

1, npm install react-router-dom 

2, punta sa main.jsx then: import {BrowserRouter} from 'react-router-dom'

3, pag an import na natin, ipaloob lang natin sya sa strick mode natin:

<strickmode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</strickmode>
 
4, punta na tayo sa App.jsx and then import natin to: import { Routes, Route } from 'react-router-dom'

5, ipaloob na natin sya sa loob ng: 

const App = () => {
    return(
    <RootLayout>
        <Routes>
            <Route />
        </Routes>
    </RootLayout>
    )
}

export default App

5, sa mga route natin meron tayo nakalagay dito na mga links natin 

example:
<route path="/Home" element={<Home />}/>

6, then import na natin sila sa loob ng const App natin

import Home from './Pages/Home'