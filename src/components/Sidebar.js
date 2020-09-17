import React, { Component } from "react";
import "../css_file/Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="user_profile">
          <img src="" alt="" className="user_pic" />
          <div className="user_name">Ronald Hidvegi</div>
        </div>
        <div className="top_message">
          <h4>All Unread</h4>
          <h4>All Threads</h4>
        </div>
        <div className="starred">
          <h4>Starred</h4>
          <ul>
            <li>Nate Diaz</li>
            <li>Nick Diaz</li>
          </ul>
        </div>
        <div className="channels">
          <h4>channels</h4>

          <li>action</li>
          <li>design-feedback</li>
          <li>events</li>
          <li>facelift</li>
        </div>
        <div className="direct_messages">
          <h4>direct Messages</h4>

          <li>slackbot</li>
        </div>
      </div>
    );
  }
}
