import React from 'react';
import '../../css/MainPage.css';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import Axios from 'axios';

var redirect = '';

class LoginComponent extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      username: '',
      password: '',
      hasLoginFailed: false,
    };

    this.handleChange = this.handleChange.bind (this);
    this.handleLogInClick = this.handleLogInClick.bind (this);
  }

  handleChange (event) {
    console.log (event.target.name);
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  handleLogInClick (event) {
    event.preventDefault ();

    RecruiterAuthenticationService.executeBasicAuthentication (
      this.state.username,
      this.state.password
    )
      .then (function (response) {
        redirect = response.data;
        console.log (redirect);
      })
      .then (() => {
        if (redirect == 'recruiter')
          RecruiterAuthenticationService.registerSuccessfullRecruiterLogin (
            this.state.username,
            this.state.password
          );
        else if (redirect == 'head') {
          RecruiterAuthenticationService.registerSuccessfullHeadLogin (
            this.state.username,
            this.state.password
          );
        } else if (redirect == 'admin') {
          RecruiterAuthenticationService.registerSuccessfullAdminLogin (
            this.state.username,
            this.state.password
          );
          Axios.get ('http://localhost:8080/admin/hi').then (r =>
            console.log (r.data)
          );
        }
        this.props.history.push ('/' + redirect);
      })
      .catch (() => {
        this.setState ({hasLoginFailed: true});
      });
  }

  render () {
    return (
      <div>
        <div className="col-2">
          <form>
            <ul>
              <li>
                <input
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="login"
                  type="login"
                />
              </li>
              <li>
                <input
                  name="password"
                  value={this.state.passowrd}
                  onChange={this.handleChange}
                  placeholder="hasło"
                  type="password"
                />
              </li>
              <li>
                <button onClick={this.handleLogInClick}>Zaloguj się</button>
                <input className="checkbox" type="checkbox" />
                <p className="checkbox">Zapamiętaj</p>
              </li>
            </ul>
          </form>
          <OnLoginFailed hasLoginFailed={this.state.hasLoginFailed} />
        </div>
      </div>
    );
  }
}

function OnLoginFailed (props) {
  if (props.hasLoginFailed === true)
    return <div>Podano błędny login lub hasło.</div>;
  else return null;
}

export default withRouter (LoginComponent);
