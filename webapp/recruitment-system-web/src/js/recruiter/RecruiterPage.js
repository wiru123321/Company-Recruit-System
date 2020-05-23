import React from 'react';
import '../../css/RecruiterPage.css';
import RegisterForm from './register-form/Form';
import FindRecruitForm from './find-form/FindRecruitForm';
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
class RecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div class="col-3 r-menu">
            <ul>
              <li className="interactive">
              <img className="imgSize" src={reg} />
                <NavLink to="/recruiter/register"> Zarejestruj
                </NavLink>
              </li>
              <li className="interactive">
                <NavLink to="/recruiter/find">
                  <img className="imgSize" src={find} /> Wyszukaj
                </NavLink>
              </li>
              <li className="interactive">
                <NavLink to="/recruiter/help">
                  <img className="imgSize" src={help} /> Pomoc
                </NavLink>
              </li>
              <li className="interactive">

                <a href="/login" onClick={Auth.logoutRecruiter}>

                  <img className="imgSize" src={logout} /> Wyloguj

                </a>
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
          <footer style={{marginTop: '15px', fontSize: 20}}>
              <img
                  src={logoRecruiter}
                  style={{
                        width: 720,
                        height: 151,
                        backgroundColor: '#ffffff',
                        float: 'left',
                        float: 'inline-end'
                        }}
                          />
              <a className="footerContent"> &#9400; 2020 - System Obsługi Rekrutacji</a>
            </footer>
        </Router>
      </div>
    );
  }
}

export default withRouter (RecruiterPage);
