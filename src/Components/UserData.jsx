import React, { Component } from "react";

export class UserData extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <img src={this.props.user.avatar} alt="user-avatar" />
          <h3>{this.props.user.name}</h3>
        </div>
        <p>
          <span>BIO: </span>
          {this.props.user.bio}
        </p>
        <p>
          <span>LOCATION: </span>
          {this.props.user.location}
        </p>
        <p>
          <span>REPOSITORIES: </span>
        </p>
        <ul>
          {this.props.repos.map((rep, index) => (
            <div key={index}>{rep}</div>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserData;
