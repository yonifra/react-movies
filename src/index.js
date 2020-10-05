import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import styles from './index.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from 'react-router-dom'
import SearchAppBar from './Components/searchAppBar'

class Main extends React.Component {
  render() {
    return (
      <div className="appBarContainer">
        <BrowserRouter>
          <SearchAppBar/>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));