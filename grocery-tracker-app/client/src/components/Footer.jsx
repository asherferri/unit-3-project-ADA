import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h3 className="footer-text"><Link to="/about">Copyright © 2020 - Made by the Aging Developers Association</Link></h3>
        </footer>
    );
};

export default Footer;