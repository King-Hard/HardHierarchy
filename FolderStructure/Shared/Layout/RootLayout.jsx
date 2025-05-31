import Head from "../Partial/Head"
import Foot from "../Partial/Foot"

const RootLayout = ({child}) => {
    <>

        <Head />
            {child}
        <Foot />

    </>
}

export default RootLayout