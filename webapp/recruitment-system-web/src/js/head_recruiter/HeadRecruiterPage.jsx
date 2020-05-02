import React from 'react';
import '../../css/HeadRecruiterPage.css';
import OffersSurvey from './offers-survey/Survey.jsx';
import NewOffer from './NewOffer.jsx';
import Help from './Help.jsx';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import AuthRoute from '../serivce/HeadAuthenticatedRoute.js';
/* Strona kierownika */
class HeadRecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div className="sidenav">
            <a href="/head/surveyOffers">
              Przegladaj oferty zatrudnienia
            </a>
            <a href="/head/addOffer">
              Dodaj ofertę zatrudnienia
            </a>
            <a className="help" href="/head/help">Pomoc</a>
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
