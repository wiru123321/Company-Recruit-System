import React from 'react';
import ContentComponent from './ContentComponent';
import LoginCompnent from './LoginComponent';
import '../../css/MainPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
/* Strona główna dostępna pod /main */
class MainPage extends React.Component {
  render () {
    return (
      <div>
        <div>
          <ul className="navBar">
            <li className="navBar navBarToLeft">
              <p className="appTitle">
                System Obsługi Rekrutacji
              </p>
            </li>
            <li className="navBar navBarToRight">
              <LoginCompnent />
            </li>
            <li className="navBar navBarToRight" />
          </ul>
        </div>
        <ContentComponent />
        <div>
          <footer className="footerSection">
            <br /><br />© 2020 - System Obsługi Rekrutacji
          </footer>
        </div>
      </div>
    );
  }
}

export default MainPage;
