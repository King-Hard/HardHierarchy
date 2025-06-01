# Outlet Layout

Structure:
App.jsx

<Routes>
    <Route element={RootLayout}>
        <Route path="/Home" element={<Home />}>
        <Route path="/About" element={<About />}>
        <Route path="/Contact" element={<Contact />}>
    </Route>

    <Route path="*" element={<NotFound />}>
</Routes>

RootLayout.jsx

import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return(
        <>

            <Header />
                <Outlet />
            <Footer />

        </>
    )
}


Main explanation: Sa outlet layout natin diba may unwanted searc si user or may page man sya na wala naman sa system natin dit ona papasok yung outlet natin imbis na naka RootLayout tayo gagawin na lang natin is Routes tapos lalagay natin sya sa element, bali yung navbar natin is nasa loob nya, then  gawa ulit tayo ng is pang route pero ito is singel lang para sa unwanted page natin <Route path="*" element={NotFound}/> then tapos na setup natin ngayon punta tayo sa root layout tangalin natin yung child then, mag import na lang tayo ng outlet the from reacr-router-dom saka natin ilagay sa loob ng header and footer yung outlet natin