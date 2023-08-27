import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Stylenav.css'


    function Navbar(){
       return(
        <nav className='top'>
            <ul>
                <li className='Home'><Link className='link' to="/"><strong>Home</strong></Link></li>
                <li className='About'><Link className='link' to="/About"><strong>About us</strong></Link></li>
                <li className='poke'><Link className='link' to="/Pokedex"><strong>Pokédex</strong></Link></li>
            </ul>
        </nav>
       )
    }

export default Navbar