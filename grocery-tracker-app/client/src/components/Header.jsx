import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="main-nav">
                <div className="logo">Logo</div>
                <ul>
                    <li><Link to="/groceries">Groceries</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="logout" onClick={() => props.logout()}><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;