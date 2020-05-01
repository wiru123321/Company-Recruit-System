import React from 'react';
import Auth from './AuthenticationSerivce.js';
import {Route, Redirect, withRouter} from 'react-router-dom';

class AdminAuthenticatedRoute extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    if (Auth.isAdminLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      if (Auth.isRecruiterLoggedIn ()) {
        return <Redirect to="/recruiter" />;
      }
        if (Auth.isHeadLoggedIn ()) {
          return <Redirect to="/head" />;
        }  
      else {
        return <Redirect to="/login" />;
      }
    }
  }
}

export default withRouter (AdminAuthenticatedRoute);
