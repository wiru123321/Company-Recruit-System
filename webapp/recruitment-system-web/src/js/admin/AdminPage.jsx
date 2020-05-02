import React from 'react';
import '../../css/HeadRecruiterPage.css';
import Help from './Help';
import {BrowserRouter as Router, NavLink, withRouter} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import AuthRoute from '../serivce/HeadAuthenticatedRoute.js';
/* Strona administratora */
class AdminPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div className="sidenav">
            <a>
              <NavLink to="/head/surveyOffers">
                Przeglądaj pracowników
              </NavLink>
            </a>
            <a>
              <NavLink to="/head/addOffer">Dodaj pracownika</NavLink>
            </a>
            <a className="help"><NavLink to="/admin/help">Pomoc</NavLink></a>
            <a
              className="logout"
              href="/login"
              onClick={RecruiterAuthenticationService.logoutAdmin}
            >
              Wyloguj
            </a>
          </div>
          <div className="main">
            <AuthRoute path="/head/help" component={Help} />

          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter (AdminPage);
