import React, { Component } from 'react';

// const Login = () => (
//     <div>
//         <h2>Login</h2>
//     </div>
// );

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
          username: event.target.value,
        });
      }

    handleLoginSubmit() {
        console.log('button was clicked');
        console.log('username is: ' + this.state.username);
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleInputChange} />
                <button onClick={this.handleLoginSubmit}>Login</button>
            </div>
        );
    }
}

export default Login;