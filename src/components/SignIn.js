import React, { Component } from "react";
import "../css_file/SignIn.css";

export default class SIgnIn extends Component {
  render() {
    return (
      <div className="signIn__form">
        <h1>Sign In</h1>
        <button>Sign in with Google/ Sign up with Google</button>
      </div>
    );
  }
}
