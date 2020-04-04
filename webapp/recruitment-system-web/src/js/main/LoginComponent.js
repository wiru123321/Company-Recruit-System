import React from 'react';
import '../../css/MainPage.css';
import {withRouter} from 'react-router-dom';

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
    console.log (this.state.username, this.state.password);
    if (this.state.username === 'rekruter' && this.state.password === 'admin') {
      this.props.history.push ('/recruiter');
    } else if (
      this.state.username === 'kierownik' &&
      this.state.password === 'admin'
    ) {
      this.props.history.push ('head');
    } else {
      this.setState ({hasLoginFailed: true});
    }
  }

  render () {
    return (
      <div>
        <form>
          <li className="navBar navBarToRight">
            <button onClick={this.handleLogInClick} className="loginButton">
              Zaloguj się
            </button>
          </li>
          <li className="navBar navBarToRight">
            <input
              name="password"
              value={this.state.passowrd}
              onChange={this.handleChange}
              className="loginInput"
              placeholder="hasło"
              type="password"
            />
          </li>
          <li className="navBar navBarToRight">
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="loginInput"
              placeholder="login"
              type="login"
            />
          </li>
        </form>
        <OnLoginFailed hasLoginFailed={this.state.hasLoginFailed} />
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
