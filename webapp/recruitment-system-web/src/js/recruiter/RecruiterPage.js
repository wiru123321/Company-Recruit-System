import React from 'react';
import '../../css/RecruiterPage.css';
import RegisterForm from './register-form-component/RegisterForm';
import FindRecruitForm from './FindRecruitForm';
import HelpComponent from './HelpComponent';
import AuthRoute from '../serivce/RecruiterAuthenticatedRoute';
import Auth from '../serivce/AuthenticationSerivce.js';
import reg from '../../resources/register.png';
import find from '../../resources/search.png';
import help from '../../resources/question.png';
import logout from '../../resources/logout.png';
import logoRecruiter from '../../resources/logo.png';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  withRouter,
} from 'react-router-dom';
import CallApi from '../head_recruiter/service/CallApi';
/* Strona rekrutera dostepna pod /recruiter*/
class RecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div class="col-3 r-menu">
            <label>{Auth.getRecruiterName ()}</label>
            <ul>
              <li className="interactive">
                <NavLink to="/recruiter/register">
                  <img src={reg} /> Zarejestruj
                </NavLink>
              </li>
              <li className="interactive">
                <NavLink to="/recruiter/find">
                  <img className="imgSize" src={find} /> Wyszukaj
                </NavLink>
              </li>
              <li className="interactive">
                <NavLink to="/recruiter/help">
                  <img src={help} /> Pomoc
                </NavLink>
              </li>
              <li className="interactive">

                <a href="/login" onClick={Auth.logoutRecruiter ()}>

                  <img className="imgSize" src={logout} /> Wyloguj

                </a>
              </li>
            </ul>
            <img
              src={logoRecruiter}
              style={{
                width: 720,
                height: 151,
                backgroundColor: '#ffffff',
                position: 'fixed',
              }}
            />
            
            <footer style={{marginTop: '100vh', fontSize: 20}}>

              &#9400; 2020 - System Obsługi Rekrutacji
            </footer>
          </div>
          <div className="r-row">
            <div>
              <div>
                {/* TO DO: Naprawic autentykacje */}
                <Route path="/recruiter/register" component={RegisterForm} />
                <Route path="/recruiter/find" component={FindRecruitForm} />
                <Route path="/recruiter/help" component={HelpComponent} />

              </div>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter (RecruiterPage);
