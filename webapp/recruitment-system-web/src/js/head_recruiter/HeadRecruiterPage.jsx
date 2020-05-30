import React from "react";
import "../../css/HeadRecruiterPage.css";
import OffersSurvey from "./offers-survey/Survey.jsx";
import NewOffer from "./NewOffer.jsx";
import Help from "./Help";
import { BrowserRouter as Router, NavLink, withRouter } from "react-router-dom";
import RecruiterAuthenticationService from "../serivce/AuthenticationSerivce.js";
import AuthRoute from "../serivce/HeadAuthenticatedRoute.js";
import logoRecruiter from "../../resources/logo.png";

class HeadRecruiterPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="sidenav">
            <br />
            <br />
            <NavLink to="/head/surveyOffers">
              Przegladaj oferty zatrudnienia
            </NavLink>
            <NavLink to="/head/addOffer">Dodaj ofertę zatrudnienia</NavLink>
            <NavLink className="help" to="/head/help">
              Pomoc
            </NavLink>
            <a
              className="logout"
              href="/login"
              onClick={RecruiterAuthenticationService.logoutHead}
            >
              Wyloguj
            </a>
          </div>
          <div className="main">
            <AuthRoute path="/head/surveyOffers" component={OffersSurvey} />
            <AuthRoute path="/head/addOffer" component={NewOffer} />
            <AuthRoute path="/head/help" component={Help} />
          </div>
        </Router>
        <footer class="col-12" style={{ marginTop: "15px", fontSize: "2vw" }}>
          <img
            src={logoRecruiter}
            className="r-row"
            style={{
              width: "50vw",
              backgroundColor: "#ffffff",
              float: "left",
              float: "inline-end",
            }}
          />
          <a className="footerContent">
            &#9400; 2020 - System Obsługi Rekrutacji
          </a>
        </footer>
      </div>
    );
  }
}

export default withRouter(HeadRecruiterPage);
