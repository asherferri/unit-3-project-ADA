import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <form>
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;