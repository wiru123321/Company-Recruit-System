import React from 'react';
import '../../css/AdminPage.css';
import {BrowserRouter as Router, withRouter, Route} from 'react-router-dom';
import RecruiterAuthenticationService
  from '../serivce/AuthenticationSerivce.js';
import WorkersSurvey from './workers-survey/WorkersSurvey.jsx';
import AddWorkers from './add-workers/AddWorkers.jsx';
import AuthRoute from '../serivce/HeadAuthenticatedRoute.js';
/* Strona administratora */
class AdminPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <ul className="top-nav">
              <li>
                <a href="/admin/surveyWorkers">
                  Przeglądaj pracowników
                </a>
              </li>
              <li>
                <a href="/admin/addWorkers">
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
          </div>
          <div>
            <Route path="/admin/surveyWorkers" component={WorkersSurvey} />
            <Route path="/admin/addWorkers" component={AddWorkers} />
          </div>
        </Router>

      </div>
    );
  }
}

export default withRouter (AdminPage);
