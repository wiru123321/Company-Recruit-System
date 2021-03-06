import React from 'react';
import MainPage from './js/main/MainPage.jsx';
import RecruiterPage from './js/recruiter/RecruiterPage';
import HeadRecruiterPage from './js/head_recruiter/HeadRecruiterPage.jsx';
import RecruiterAuthRoute from './js/serivce/RecruiterAuthenticatedRoute';
import HeadAuthRoute from './js/serivce/HeadAuthenticatedRoute';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminAuthenticatedRoute from './js/serivce/AdminAuthenticatedRoute.js';
import AdminPage from './js/admin/AdminPage.jsx';

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
            <AdminAuthenticatedRoute path="/admin" component={AdminPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
