import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <form>
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <input type="submit" value="Register" />
                </form>
                <p>Not a member?  Sign up <Link to="/register"><span className="register-link">here</span></Link></p>
            </div>
        )
    }
}

export default Login;