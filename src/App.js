import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie/Movie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Movie Scraper</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <Movie
              name="Forrest Gump"
              description="Just the movie description"
            />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
