import React, {Component } from 'react';

export default class Secret extends Component {
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h2>Welcome to the Demo App {this.props.name}</h2>
                {this.props.profilePicture ?
                <img src={this.props.profilePicture} alt="profile" />:
                ""
                }
                <p>You can only see this page if you are logged in</p>
                <a href="/">Go back to home page</a>
                <br/>
                <button onClick={this.props.auth.logout} style={buttonStyleLogout}>Logout</button>
            </div>
        )
    }
}

const buttonStyleLogout = {
    marginTop: '20px',
    padding: '10px',
    color: 'white',
    backgroundColor: 'black',
    border: '5px solid grey'
  };