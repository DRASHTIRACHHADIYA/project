import { useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {

    const navigate =useNavigate()
    const location=useLocation()

    if(location.pathname==='/contact'){
        return <h1>hyyhyh</h1>
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='/logo.png' alt='' />
            </div>

            <div className='nav-center'>
                <li onClick={()=>navigate('/')}>Home</li>
                <li>Services</li>
                <li onClick={()=>navigate('/contact')}>Contact</li>
                <li>About Us</li>
            </div>

            <div className='nav-right'>
                <button className='outline-btn'>Apply Now</button>
            </div>
        </div>
    )
}

export default Header
