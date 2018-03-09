import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    // Handler for username input
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    // Handler for password input
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleLoginSubmit(e) {
        console.log('button was clicked');
        console.log('username is: ' + this.state.username);
        console.log('password is: ' + this.state.password);
        e.preventDefault(); // prevents page refresh
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLoginSubmit}>
                    <label>Username:
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;