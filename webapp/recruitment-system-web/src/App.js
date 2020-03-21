import React from 'react';
import MainPage from './js/main/MainPage';
import RecruiterPage from './js/recruiter/RecruiterPage';
import HeadRecruiterPage from './js/head_recruiter/HeadRecruiterPage';
import './App.css';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Route
            path="/login"
            render={routeProps => <MainPage {...routeProps} />}
          />
          <Route
            path="/recruiter"
            render={routeProps => <RecruiterPage {...routeProps} />}
          />
          <Route
            path="/head"
            render={routeProps => <HeadRecruiterPage {...routeProps} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
