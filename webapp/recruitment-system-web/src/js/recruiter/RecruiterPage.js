import React from 'react';
import '../../css/RecruiterPage.css';
import RegisterForm from './RegisterForm';
import FindRecruitForm from './FindRecruitForm';
import HelpComponent from './HelpComponent';
import reg from '../../resources/register.png';
import find from '../../resources/search.png';
import help from '../../resources/question.png';
import logout from '../../resources/logout.png';
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
/* Strona rekrutera dostepna pod /recruiter*/
class RecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <ul className="navContainer menuFontStyle">
              <li>
                <ul className="personalInfoStyle">
                  <li><label>Imie</label></li>
                  <li><label>Nazwisko</label></li>
                </ul>
              </li>
              <li className="navContainer">
                <NavLink to="/recruiter/register">
                  <img className="imgSize" src={reg} /> Zarejestruj
                </NavLink>
              </li>
              <li className="navContainer">
                <NavLink to="/recruiter/find">
                  <img className="imgSize" src={find} /> Wyszukaj
                </NavLink>
              </li>
              <li className="navContainer">
                <NavLink className="help" to="/recruiter/help">
                  <img className="imgSize" src={help} /> Pomoc
                </NavLink>
              </li>
              <li className="navContainer">
                <a className="logout" href="/main">
                  <img className="imgSize" src={logout} /> Wyloguj
                </a>
              </li>
              <li>
                <footer style={{marginTop: '150%', fontSize: 20}}>
                  &#9400; 2020 - System Obsługi Rekrutacji
                </footer>
              </li>
            </ul>
          </div>
          <div>

            <Route path="/recruiter/register" component={RegisterForm} />
            <Route path="/recruiter/find" component={FindRecruitForm} />
            <Route path="/recruiter/help" component={HelpComponent} />

          </div>
        </Router>
      </div>
    );
  }
}

export default RecruiterPage;
