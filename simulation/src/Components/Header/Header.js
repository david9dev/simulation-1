import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import img from './shelfie_icon.png'
function Header()
{
    return(
        <div className='header_bar'>
        <img className='icon'src={img} alt='icon'/>
        <h2 className='shelfie'>SHELFIE</h2>
        <Link className='header_buttons' to='/'><button>Dashboard</button></Link>
        <Link className='header_buttons' to='/form/false/0'><button>Form</button></Link>
        </div>
    );
}

export default Header;