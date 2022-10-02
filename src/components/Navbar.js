import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <Link to='/'><h1>The Weeknd</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/training'>Training</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : ( <FaBars size={20} style={{color: 'white'}} />)};
                </div>
        </div>
    );
}

export default Navbar;