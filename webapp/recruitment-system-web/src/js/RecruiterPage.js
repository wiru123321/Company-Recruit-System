import React from 'react';
import '../css/RecruiterPage.css';
import reg from '../resources/register.png';
import find from '../resources/search.png';
import help from '../resources/question.png';
import logout from '../resources/logout.png';

/* Strona rekrutera dostepna pod /recruiter*/
class RecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <div>
          <ul className="navContainer menuFontStyle">
            <li>
              <ul className="personalInfoStyle">
                <li><label>Imie</label></li>
                <li><label>Nazwisko</label></li>
              </ul>
            </li>
            <li className="navContainer">
              <a><img className="imgSize" src={reg} /> Zarejestruj</a>
            </li>
            <li className="navContainer">
              <a> <img className="imgSize" src={find} /> Wyszukaj</a>
            </li>
            <li className="navContainer">
              <a className="help">
                <img className="imgSize" src={help} /> Pomoc
              </a>
            </li>
            <li className="navContainer">
              <a className="logout">
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
          <p style={{margin: 0}}>afsa</p>
        </div>
      </div>
    );
  }
}

export default RecruiterPage;
