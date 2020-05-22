import React from 'react';
import ContentComponent from './Content.jsx';
import LoginCompnent from './Login.jsx';
import '../../css/MainPage.css';
import logo from '../../resources/logo.png';

class MainPage extends React.Component {
  render () {
    return (
      <div class="allLogin">
        <div className="header col-12 form">
          <div className="col-2" />
          <div className="col-8">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <LoginCompnent />

        </div>
        <ContentComponent />
      </div>
    );
  }
}

export default MainPage;
