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

    /* Used to set state of changes in the webform to each input field */
    handleInputchange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="register-container">
                <div className="register">
                    {/* Sends registration information back up to App */}
                    <form onSubmit={ (e) => this.props.handleRegisterSubmit(e, this.state)}>
                        <div className="item-register">
                            <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleInputchange} />
                        </div>
                        <div className="item-register">    
                            <input type="password" name="password" value={this.state.password}  placeholder="password" onChange={this.handleInputchange} />
                        </div>
                        <div className="item-register">   
                            <input type="email" name="email" value={this.state.email}  placeholder="email" onChange={this.handleInputchange} />
                        </div> 
                        <div className="item-register">
                            <input type="text" name="first_name" value={this.state.first_name}  placeholder="first name" onChange={this.handleInputchange} />
                        </div>
                        <div className="item-register">
                            <input type="text" name="last_name" value={this.state.last_name}  placeholder="last name" onChange={this.handleInputchange} />
                        </div>
                        <div className="item-register">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;