import React from 'react';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
        }
        this.handleInputchange = this.handleInputchange.bind(this)
    }

    handleInputchange(e) {
        const [name, value] = e.target;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="register">
                <form onSubmit={ (e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleInputchange} />
                    <input type="text" name="password" value={this.state.password}  placeholder="password" onChange={this.handleInputchange} />
                    <input type="text" name="email" value={this.state.email}  placeholder="email" onChange={this.handleInputchange} />
                    <input type="text" name="first_name" value={this.state.first_name}  placeholder="first name" onChange={this.handleInputchange} />
                    <input type="text" name="last_name" value={this.state.last_name}  placeholder="last name" onChange={this.handleInputchange} />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;