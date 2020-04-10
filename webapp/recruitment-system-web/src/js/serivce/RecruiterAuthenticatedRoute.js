import React from 'react';
import Auth from './AuthenticationSerivce.js';
import {Route, Redirect} from 'react-router-dom';

class RecruiterAuthenticatedRoute extends React.Component {
  render () {
    if (Auth.isRecruiterLoggedIn ()) {
      return <Route {...this.props} />;
    } else {
      if (Auth.isHeadLoggedIn) {
        return <Redirect to="/head" />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }
}

export default RecruiterAuthenticatedRoute;
