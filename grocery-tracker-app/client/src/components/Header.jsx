import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">Logo</div>
                <ul>
                    <li><Link to="/groceries">Groceries</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="logout"><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;