import React from 'react';
import {Link} from 'react-router-dom';

let Header = ()=>{
    return(
        <>
        <header>
            <ul>
                <li><Link to="/">MERN-Stack Todo App</Link></li>
                <li><Link to="/">Todos</Link></li>
                <li><Link to="/create">Create Todo</Link></li>
                <li><Link to="/create">Create Todo</Link></li>
            </ul>
        </header>
        </>
    )
}

export default Header;