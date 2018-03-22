import React, { Component } from 'react';

// const Register = () => (
class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        // this.addUsers = this.addUsers.bind(this);
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    //     
    //     
    // </div>
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.addUsers}>
                    <label>Username:
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Register</button>
                </form>
            </div>
        )
    }
};

export default Register;