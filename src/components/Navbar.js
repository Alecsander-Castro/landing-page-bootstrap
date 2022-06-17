import {Link} from 'react-router-dom'

import '../components/styles/Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="nav-bar" data-aos="fade-down" data-aos-duration="1000">
                <div>
                    <ul className="link-items">
                        <li> 
                            <Link to='/'>Home</Link>
                        </li>
                        <li> 
                            <Link to='/about'>About</Link>
                        </li>
                        <li> 
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}