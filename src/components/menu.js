import React from 'react';
import { Link } from 'react-router-dom';

function Menu () {
    return <div>
        <Link to='/about'>Abaut</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/' >Home</Link>
        <Link to='/posts'>Posts</Link>
        <hr></hr>
    </div>
}

export default Menu