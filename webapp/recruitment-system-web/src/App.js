import React from 'react';
import MainPage from './js/main/MainPage.jsx';
import RecruiterPage from './js/recruiter/RecruiterPage';
import HeadRecruiterPage from './js/head_recruiter/HeadRecruiterPage.jsx';
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
            <Route path="/login" component={MainPage} />
            <RecruiterAuthRoute path="/recruiter" component={RecruiterPage} />
            <HeadAuthRoute path="/head" component={HeadRecruiterPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
