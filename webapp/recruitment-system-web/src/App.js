import React from 'react';
import MainPage from './js/main/MainPage';
import RecruiterPage from './js/recruiter/RecruiterPage';
import HeadRecruiterPage from './js/head_recruiter/HeadRecruiterPage';
import RecruiterAuthRoute from './js/serivce/RecruiterAuthenticatedRoute';
import HeadAuthRoute from './js/serivce/HeadAuthenticatedRoute';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/login"
              component={MainPage}
              /* render={routeProps => <MainPage {...routeProps} />}*/
            />
            <RecruiterAuthRoute
              path="/recruiter"
              component={RecruiterPage}
              /*render={routeProps => <RecruiterPage {...routeProps} />}*/
            />
            <HeadAuthRoute
              path="/head"
              component={HeadRecruiterPage}
              /* render={routeProps => <HeadRecruiterPage {...routeProps} />}*/
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
