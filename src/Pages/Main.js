import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Movie from "./pages/Movie";
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/pages/movie">Movie</NavLink></li>
            </ul>
            <div className="content">

            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;