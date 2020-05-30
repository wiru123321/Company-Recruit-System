import React from "react";
import "../../css/AdminPage.css";
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";
import RecruiterAuthenticationService from "../serivce/AuthenticationSerivce.js";
import WorkersSurvey from "./workers-survey/WorkersSurvey.jsx";
import AddWorkers from "./add-workers/AddWorkers.jsx";
import AuthRoute from "../serivce/AdminAuthenticatedRoute.js";
import logoRecruiter from "../../resources/logo.png";
class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div class="col-3 r-menu-adm ">
            <ul>
              <li className="interactive">
                <NavLink to="/admin/surveyWorkers">
                  Przeglądaj pracowników
                </NavLink>
              </li>
              <li className="interactive">
                <NavLink to="/admin/addWorkers">Dodaj pracownika</NavLink>
              </li>
              <li className="interactive">
                <a
                  href="/login"
                  onClick={RecruiterAuthenticationService.logoutAdmin}
                >
                  Wyloguj
                </a>
              </li>
            </ul>
          </div>
          <div>
            <AuthRoute path="/admin/surveyWorkers" component={WorkersSurvey} />
            <AuthRoute path="/admin/addWorkers" component={AddWorkers} />
          </div>
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
              {" "}
              &#9400; 2020 - System Obsługi Rekrutacji
            </a>
          </footer>
        </Router>
      </div>
    );
  }
}

export default withRouter(AdminPage);
