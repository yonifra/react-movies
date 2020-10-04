import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './Components/searchMovies'

// eslint-disable-next-line
import styles from './index.css';
import 'semantic-ui-css/semantic.min.css'
import SearchAppBar from './Components/searchAppBar'

class Main extends React.Component {
  render() {
    return (
      <div className="appBarContainer">
        <SearchAppBar/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));