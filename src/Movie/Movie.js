import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Sample Movie",
      imageUrl: "",
      description: ""
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
      </div>
    );
  }
}

export default Movie;
