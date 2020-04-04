import React from 'react';
import '../../css/HeadRecruiterPage.css';
import search from '../../resources/search_list.png';
import RecruitsSurveyComponent from './RecruitsSurveyComponent';
import OffersSurveyComponent from './OffersSurveyComponent';
import NewOfferComponent from './NewOfferComponent';
import HelpComponent from './HelpComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
  useHistory,
} from 'react-router-dom';
/* Strona kierownika */
class HeadRecruiterPage extends React.Component {
  render () {
    return (
      <div>
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
          <a className="logout"><NavLink to="/login">Wyloguj</NavLink></a>
        </div>
        <div className="main">
          <Router>
            <Route
              path="/head/surveyRecruits"
              render={routeProps => <RecruitsSurveyComponent {...routeProps} />}
            />
            <Route
              path="/head/surveyOffers"
              render={routeProps => <OffersSurveyComponent {...routeProps} />}
            />
            <Route
              path="/head/addOffer"
              render={routeProps => <NewOfferComponent {...routeProps} />}
            />
            <Route
              path="/head/help"
              render={routeProps => <HelpComponent {...routeProps} />}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default HeadRecruiterPage;
