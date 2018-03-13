import React, { Component } from 'react';
const url = 'http://localhost:5000/api';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            username: '',
            password: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    componentDidMount() {
        console.log('component has mounted');
        this.getUsers();
    }

    getUsers() {
        fetch(`${url}/users`)
            .then(response => response.json())
            .then(userResponseArray => {
                console.log(userResponseArray);
                this.setState({
                    users: userResponseArray
                });
            })
            .catch(error => console.log(`Error with Fetch getUsers: ${error}`));
    }

    addUsers(event) {
        event.preventDefault();
        const user_data = {
            username: this.state.username,
            password: this.state.password,
        }
        const request = new Request(`${url}/new-user`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(user_data)
        });
        fetch(request)
            .then(response => {
                console.log(`post was successful: ${response}`);
                this.getCountries();
            })
            .catch(error => console.log(`Fetch failed on addCountry Post: ${error}`)
            )
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
                <ul>
                    {this.state.users.map(pit => (
                        <li key={pit.id}>{pit.username} | {pit.password}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Login;