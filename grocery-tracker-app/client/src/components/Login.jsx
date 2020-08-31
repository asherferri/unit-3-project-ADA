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

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                    <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleInputChange} />
                    <input type="text" name="password" value={this.state.password} placeholder="password" onChange={this.handleInputChange} />
                    <input type="submit" value="Login" />
                </form>
                <p>Not a member?  Sign up <Link to="/register"><span className="register-link">here</span></Link></p>
            </div>
        )
    }
}

export default Login;