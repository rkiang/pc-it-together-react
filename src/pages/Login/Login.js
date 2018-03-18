import React, { Component } from 'react';
import { Link } from "react-router-dom";
const url = 'http://localhost:5000/api';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            username: '',
            password: '',
        }
        this.addUsers = this.addUsers.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
            this.getUsers();
            this.setState({
                username: '',
                password: '',
            });
        })
        .catch(error => console.log(`Fetch failed on addUsers Post: ${error}`)
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUsers}>
                    <label>Username:
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Login</button>
                </form>
                <hr />
                <p><Link to='./pages/Register/Register.js'>Sign Up</Link></p>
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