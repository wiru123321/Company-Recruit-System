import React from 'react';
import '../../css/HeadRecruiterPage.css';
import search from '../../resources/search_list.png';
import RecruitsSurveyComponent from './RecruitsSurveyComponent';
import OffersSurveyComponent from './OffersSurveyComponent';
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
            <a>
              <NavLink to="/head/surveyRecruits">Przeglądaj rekrutów</NavLink>
            </a>
            <a>
              <NavLink to="/head/surveyOffers">
                Przegladaj oferty zatrudnienia
              </NavLink>
            </a>
            <a>
              <NavLink to="/head/addOffer">Dodaj ofertę zatrudnienia</NavLink>
            </a>
            <a className="help"><NavLink to="/head/help">Pomoc</NavLink></a>
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
              path="/head/surveyRecruits"
              component={RecruitsSurveyComponent}
            />
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
