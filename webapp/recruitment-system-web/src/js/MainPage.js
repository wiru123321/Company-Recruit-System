import React from 'react';
import '../css/MainPage.css';
import '../css/LoginPopup.css';
import Popup from 'reactjs-popup';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from 'react-router-dom';

const API = 'https://localhost:8080/recruiter/all';

class MainPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      user: [],
    };
  }

  componentDidMount () {
    console.log ('Component did mount.');
    console.log (this.state.user);
  }

  render () {
    return (
      <div>

        <div>
          <ul className="navBar">

            <li className="navBar navBarToLeft">
              <Link to="/main">tmpmain</Link>
            </li>
            <li className="navBar navBarToLeft">
              <Link to="/recruiter">tmprecruiter</Link>
            </li>
            <li className="navBar navBarToLeft">
              <Link to="/head">tmphead</Link>
            </li>

            <li className="navBar navBarToRight">
              <Login />
            </li>
          </ul>
        </div>
        <div className="pageContent">
          /* TODO: Wstawic slider wyswietlajacy jakas zawartosc.*/

          <div className="slide">
            <button className="prev">prev</button>
            <button className="next">next</button>
          </div>
          <a className="dot" />
          <a className="dot" />
          <a className="dot" />
          <div>
            <p className="footerSection" />
            <footer className="footerSection" />
          </div>
        </div>
      </div>
    );
  }
}

const user = {
  rlogin: 'rekruter',
  hrlogin: 'hrekruter',
  pswd: 'admin',
};

class Login extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      pswd: '',
    };
    this.handleLoginClick = this.handleLoginClick.bind (this);
  }

  isFormNotEmpty () {
    return this.state.email.length > 0 && this.state.pswd.length > 0;
  }

  handleLoginClick () {}

  render () {
    return (
      <Popup
        trigger={<button className="loginButton"> Zaloguj się </button>}
        onOpen={event => {
          console.log (document.getElementsByClassName ('slide').length);
        }}
        modal
        closeOnDocumentClick
      >
        <span className="loginForm">
          <form className="loginForm">
            <h1 className="loginForm"> Podaj dane logowania.</h1>
            <p className="loginForm" />
            <input
              value={login}
              className="loginForm"
              type="login"
              placeholder="login"
              onChange={}
            />
            <br />
            <input
              value={pswd}
              className="loginForm"
              type="password"
              placeholder="hasło"
            />
            <br />
            <p className="loginForm" />
            <button className="loginForm" onClick={this.handleLoginClick}>
              <Link to="/recruiter">tmprecruiter</Link>
            </button>
            <br />
          </form>
        </span>
      </Popup>
    );
  }
}

export default MainPage;
