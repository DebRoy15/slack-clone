import React, { Component } from "react";
import { Sidebar, MainContainer } from "./";
import "../css_file/Slack.css";

export default class Slack extends Component {
  render() {
    return (
      <div className="slack">
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}
