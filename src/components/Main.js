import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            <h1>Welcome to Stephen Phillips's Auth0 example</h1>
            <br/>
          <div>
              <br/>
              {this.props.name ?
              (
              <div>
                <div>{this.props.name}, you are already logged in</div>
                <br/>
                <div><a href="/secret">Go to Secret Page</a></div>   
                <button onClick={this.props.auth.logout} style={buttonStyleLogout}>Logout</button>
              </div>
              )
              :
              (<div>
                  <div>Please login</div>
                  <button onClick={this.props.auth.login} style={buttonStyleLogin}>Login</button>
                </div>
                )}
          </div>
          </div>
        )
    }
}

const buttonStyleLogin = {
    marginTop: '20px',
    padding: '10px',
    color: 'white',
    backgroundColor: 'red',
    border: '5px solid pink'
  };

const buttonStyleLogout = {
    marginTop: '20px',
    padding: '10px',
    color: 'white',
    backgroundColor: 'black',
    border: '5px solid grey'
  };