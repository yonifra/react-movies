import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './Components/searchMovies'

// eslint-disable-next-line
import styles from './index.css';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="title">React Movie Search</h1>
            <SearchMovies />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));