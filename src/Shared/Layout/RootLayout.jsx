import Header from '../Partial/Header'
import Footer from '../Partial/Footer'

const RootLayout = ({children}) => {

  return (
    <>

          <Header />

            {children}

          <Footer />

    </>
  )
}

export default RootLayout
