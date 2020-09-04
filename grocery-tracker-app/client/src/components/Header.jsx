import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="nav">
                <div className="logo">
                    <Link to="/">ButterY</Link>
                </div>
                <ul>
                    <li className="nav-bar"><Link to="/groceries">Groceries</Link></li>
                    <li className="nav-bar"><Link to="/about">About</Link></li>
                    <li className="logout" onClick={() => props.logout()}><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = (props) => {
//     return (
//         <header>
//             <nav className="nav">
//                 <div className="logo">
//                     <Link to="/">ButterY</Link>
//                 </div>
//                 {props.user ? <h3>Welcome {props.user.first_name}!</h3> : ''}
//                 <ul>
//                     <li className="nav-bar"><Link to="/groceries">Groceries</Link></li>
//                     <li className="nav-bar"><Link to="/about">About</Link></li>
//                     {props.user ? <li className="logout" onClick={() => props.logout()}><Link to="/logout">Logout</Link></li>  : ''}
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Header;