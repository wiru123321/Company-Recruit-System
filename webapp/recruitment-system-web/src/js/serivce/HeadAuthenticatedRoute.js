import React from 'react';
import Auth from './AuthenticationSerivce.js';
import {Route, Redirect, withRouter} from 'react-router-dom';

class HeadAuthenticatedRoute extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    if (Auth.isHeadLoggedIn ()) {
      return <Route {...this.props} />;
    } else {
      if (Auth.isRecruiterLoggedIn ()) {
        return <Redirect to="/recruiter" />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }
}

export default withRouter (HeadAuthenticatedRoute);
