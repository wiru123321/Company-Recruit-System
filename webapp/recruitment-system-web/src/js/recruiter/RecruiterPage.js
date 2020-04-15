import React from 'react';
import '../../css/RecruiterPage.css';
import RegisterForm from './register-form-components/RegisterForm';
import FindRecruitForm from './FindRecruitForm';
import HelpComponent from './HelpComponent';
import AuthRoute from '../serivce/RecruiterAuthenticatedRoute';
import Auth from '../serivce/AuthenticationSerivce.js';
import reg from '../../resources/register.png';
import find from '../../resources/search.png';
import help from '../../resources/question.png';
import logout from '../../resources/logout.png';
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  withRouter,
} from 'react-router-dom';
/* Strona rekrutera dostepna pod /recruiter*/
class RecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div class="col-3 r-menu">
            <label>Kamil Susek</label>
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
                <a href="/login" onClick={Auth.logoutRecruiter}>
                  <img className="imgSize" src={logout} /> Wyloguj
                </a>
              </li>
              <li>
                <footer style={{marginTop: '100vh', fontSize: 20}}>
                  &#9400; 2020 - System Obsługi Rekrutacji
                </footer>
              </li>
            </ul>
          </div>

          <div className="r-row">
            <div>
              <div>
                <AuthRoute
                  path="/recruiter/register"
                  component={RegisterForm}
                />
                <AuthRoute path="/recruiter/find" component={FindRecruitForm} />
                <AuthRoute path="/recruiter/help" component={HelpComponent} />
              </div>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter (RecruiterPage);
