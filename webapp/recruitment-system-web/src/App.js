import React from 'react';
import MainPage from './js/main/MainPage';
import RecruiterPage from './js/recruiter/RecruiterPage';
import HeadRecruiterPage from './js/head_recruiter/HeadRecruiterPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/recruiter">
            <RecruiterPage />
          </Route>
          <Route path="/head">
            <HeadRecruiterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

/*
const Authentication = {
  isAuthenticated: false,
  //cb - callback
  authenticate(cb){
    Authentication.isAuthenticated = true;
    setTimeout(cb,100);
  },
  //cb - callback
  signout(cb){
    Authentication.isAuthenticated = false;
    setTimeout(cb,100);
  }
}*/

export default App;
