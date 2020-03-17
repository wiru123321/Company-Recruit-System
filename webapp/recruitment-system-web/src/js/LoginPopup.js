import React from 'react';
import '../css/LoginPopup.css';
import Popup from 'reactjs-popup';

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);

class LoginPopup extends React.Component {
  render () {
    return <Modal />;
  }
}

class Login extends React.Component {
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
            <input className="loginForm" type="login" placeholder="login" />
            <br />
            <input className="loginForm" type="password" placeholder="hasło" />
            <br />
            <p className="loginForm" />
            <button className="loginForm">
              <Link to="/recruiter">tmprecruiter</Link>
            </button>
            <br />
          </form>
        </span>
      </Popup>
    );
  }
}

//export default LoginPopup;
export default Login;
