import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(true);
    
    const stickyNav = () => {
        if(window.scrollY >= 40){
            setNavbar(true);

        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', stickyNav);

    const closeActive = () => {
        if (window.innerWidth <= 769) {
            setClick(true);
 
        }else{
             setClick(false);
         }
     }

    window.addEventListener('resize', closeActive);

    return ( 
        <nav className={navbar ? 'navbar sticky-nav' : 'navbar'}>
                <div className="navbar-container max-width">
                    <Link to="/" className="navbar-logo">
                        <span>in</span>House Corp.
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-bars' : 'fas fa-times'}></i>
                    </div> 

                    <ul className={click ? 'nav-menu' : 'nav-menu active'}>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/' onClick={closeMobileMenu}>HOME</Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about' onClick={closeMobileMenu}>ABOUT</Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='/modelpage' onClick={closeMobileMenu}>MODEL</Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='/services' onClick={closeMobileMenu}>SERVICES</Link>
                        </li>
                    </ul>

                </div>
            </nav>
    )
}

export default Navbar
