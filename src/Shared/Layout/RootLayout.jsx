import Header from '../Partial/Header'
import Footer from '../Partial/Footer'

const RootLayout = ({children}) => {

  return (
    <>

      <div class="root-main" className='bg-gray-200 flex items-center justify-center min-h-screen'>
        <div className='border p-7 rounded-xl bg-white shadow-lg w-100'>
          <Header />

            {children}

          <Footer />
        </div>
      </div>

    </>
  )
}

export default RootLayout
