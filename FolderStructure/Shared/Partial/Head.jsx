import  { Link } from 'react-router-dom'

const Header = () => {
    <>
        <div className='border'>
            <div>
                <div>Header</div>
                <div>
                    <Link to="/Home">Home Page</Link>
                    <Link to="/About">About Page</Link>
                    <Link to="/Contact">Contanct Page</Link>
                </div>
            </div>
        </div>
    </>
}

export default Header