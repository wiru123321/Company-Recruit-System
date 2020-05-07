import React from 'react';
import '../../css/HeadRecruiterPage.css';
import OffersSurvey from './offers-survey/Survey.jsx';
import NewOffer from './NewOffer.jsx';
import Help from './Help';
import {BrowserRouter as Router, NavLink, withRouter} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import AuthRoute from '../serivce/HeadAuthenticatedRoute.js';
import CallApi from './service/CallApi';

/* Strona kierownika */

class HeadRecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div className="sidenav">
            <br />
            <br />
            <NavLink to="/head/surveyOffers">
              Przegladaj oferty zatrudnienia
            </NavLink>
            <NavLink to="/head/addOffer">Dodaj ofertę zatrudnienia</NavLink>
            <NavLink className="help" to="/head/help">Pomoc</NavLink>
            <a
              className="logout"
              href="/login"
              onClick={RecruiterAuthenticationService.logoutHead}
            >
              Wyloguj
            </a>
          </div>
          <div className="main">
            <AuthRoute path="/head/surveyOffers" component={OffersSurvey} />
            <AuthRoute path="/head/addOffer" component={NewOffer} />
            <AuthRoute path="/head/help" component={Help} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter (HeadRecruiterPage);
