import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <h2>Page not found</h2>
        <h3>Please make sure you are logged in</h3>
        <br/>
        <a href="/">Go Back to Home Page</a>
      </div>
    );
  }
}
