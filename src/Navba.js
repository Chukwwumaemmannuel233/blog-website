import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create"
                style={{
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: '8px',
                }}>New blog</Link>
        </div>
    </nav>
     );

export default Navbar;
