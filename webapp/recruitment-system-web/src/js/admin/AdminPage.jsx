import React from 'react';
import '../../css/AdminPage.css';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  NavLink,
} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import WorkersSurvey from './workers-survey/WorkersSurvey.jsx';
import AddWorkers from './add-workers/AddWorkers.jsx';
import AuthRoute from '../serivce/AdminAuthenticatedRoute.js';
/* Strona administratora */
class AdminPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <ul className="top-nav">
              <li>
                <NavLink to="/admin/surveyWorkers">
                  Przeglądaj pracowników
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/addWorkers">
                  Dodaj pracownika
                </NavLink>
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
          </div>
          <div>
            <AuthRoute path="/admin/surveyWorkers" component={WorkersSurvey} />
            <AuthRoute path="/admin/addWorkers" component={AddWorkers} />
          </div>
        </Router>

      </div>
    );
  }
}

export default withRouter (AdminPage);
