import React from "react";
import ContentComponent from "./Content.jsx";
import LoginCompnent from "./Login.jsx";
import "../../css/MainPage.css";
import logo from "../../resources/logo.png";

class MainPage extends React.Component {
  render() {
    return (
      <div class="allLogin">
        <div className="header col-12 form">
          <div className="col-12" style={{ width: "100vw" }}>
            <img className="logo1" src={logo} alt="logo" />
            <LoginCompnent />
          </div>
        </div>
        <ContentComponent />
      </div>
    );
  }
}

export default MainPage;
