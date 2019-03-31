import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Movie;
