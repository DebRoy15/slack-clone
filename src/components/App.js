import React, { Component } from "react";
import SignIn from "./SignIn";

class App extends Component {
  state = {
    counter: 1,
  };

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;
