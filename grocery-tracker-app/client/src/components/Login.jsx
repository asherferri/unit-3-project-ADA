import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super()
        this.state =  {
            username: '',
            password: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    /* Used to set state of changes in the webform to each input field */
    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
           <div className="login-container">
                <div className="login">
                    {/* Sends login information back up to App */}
                    <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                        <div className="item-login">
                            <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleInputChange} />
                        </div>
                        <div className="item-login">    
                            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleInputChange} />
                        </div>
                        <div className="item-login">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                    <p>Not a member?  Sign up <Link to="/register"><span className="register-link">here</span></Link></p>
                </div>
            </div>
        )
    }
}

export default Login;