import React from 'react';
import '../../css/AdminPage.css';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import AuthRoute from '../serivce/HeadAuthenticatedRoute.js';
/* Strona administratora */
class AdminPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <ul className="top-nav">
            <li>
              <a>
                Przeglądaj pracowników
              </a>
            </li>
            <li>
              <a>
                Dodaj pracownika
              </a>
            </li>
            <li className="logout">
              <a
                href="/login"
                onClick={RecruiterAuthenticationService.logoutAdmin}
              >
                Wyloguj
              </a>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}

export default withRouter (AdminPage);
