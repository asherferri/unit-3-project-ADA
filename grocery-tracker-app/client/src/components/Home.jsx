import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <section>
                <h1>Weclome to the Grocery Tracker App!</h1>
            </section>
            <section>
                {/* Determines link path to use, App handles routing */}
                <h3><Link to="/login">Login</Link></h3>
                <h3><Link to="/register">Register</Link></h3>
            </section>
        </div>
    )
}

export default Home;