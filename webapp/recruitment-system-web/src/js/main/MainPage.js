import React from 'react';
import ContentComponent from './ContentComponent';
import LoginCompnent from './LoginComponent';
import '../../css/MainPage.css';
import logo from '../../resources/logo.png';

/* Strona główna dostępna pod /main */
class MainPage extends React.Component {
  render () {
    return (
      <div>
        <div className="header col-12 form">
          <div className="col-2" />
          <div className="col-8">
            <img className="logo" src={logo} />
          </div>
          <LoginCompnent />
        </div>
        <ContentComponent />
      </div>
    );
  }
}

export default MainPage;
