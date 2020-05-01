import React from 'react';
import '../../css/HeadRecruiterPage.css';
import OffersSurveyComponent
  from './offers-survey-component/OffersSurveyComponent.js';
import NewOfferComponent from './NewOfferComponent';
import HelpComponent from './HelpComponent';
import {BrowserRouter as Router, NavLink, withRouter} from 'react-router-dom';
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
            <AuthRoute
              path="/head/surveyOffers"
              component={OffersSurveyComponent}
            />
            <AuthRoute path="/head/addOffer" component={NewOfferComponent} />
            <AuthRoute path="/head/help" component={HelpComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter (HeadRecruiterPage);
