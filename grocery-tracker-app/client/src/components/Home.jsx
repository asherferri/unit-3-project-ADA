import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div>
                <h1>ButterY</h1>
            </div>
            <p className="app-hm-xtrct">
                Managing groceries is hard. Finding out what you need, making a list, 
                finding the best deals at your local supermarket, and making sure you don’t 
                forget to buy something you need.<br/>Our grocery tracker app is here to help users 
                make efficient use of their trips to the grocery store and let them know when they 
                need to restock an item in their pantry.
            </p>
            <div className="home-buttons" >
                <div className="login-home">
                    <Link to="/login">Login</Link>
                </div>
                <div className="register-home">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;