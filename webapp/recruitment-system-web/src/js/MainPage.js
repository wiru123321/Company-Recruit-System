import React from 'react';
import '../css/MainPage.css';
import '../css/LoginPopup.css';
import network from '../resources/network.png';
import idea from '../resources/idea.png';
import help from '../resources/help.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from 'react-router-dom';

/* Strona główna dostępna pod /main */
class MainPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      user: [],
    };
  }

  componentDidMount () {
    console.log ('Component did mount.');
    console.log (this.state.user);
  }

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
              <form>
                <li className="navBar navBarToRight">
                  <button className="loginButton">Zaloguj się</button>
                </li>
                <li className="navBar navBarToRight">
                  <input
                    className="loginInput"
                    placeholder="hasło"
                    type="password"
                  />
                </li>
                <li className="navBar navBarToRight">
                  <input
                    className="loginInput"
                    placeholder="login"
                    type="login"
                  />
                </li>
              </form>
            </li>
            <li className="navBar navBarToRight" />
          </ul>
        </div>
        <div className="pageContent">
          <div>
            <p className="mainContent">
              <br />
              <p style={{fontWeight: 'bold'}}>O programie</p>
              <br />
              Proces rekrutacji jest związany z gromadzeniem znacznej ilości danych związanych głównie
              z nadesłanymi CV. Aplikacja wspiera duże oraz małe przedsiębiorstwa pomagając
              zarządzać całym etapem rekrutacji odciążając tym samym zespół HR. Należy również
              zadbać o bezpieczeństwo danych osobowych. Obecnie wykorzystywanie wyłącznie arkuszy
              kalkulacyjnych czy e-maili odchodzi w przeszłość. Informacje dotyczące kandydatów
              powinny być dla pracowników HR przejrzyste, co usprawni proces rekrutacji. Istotne jest to
              zwłaszcza w przypadku, kiedy mamy do czynienia z dużą liczbą aplikacji na dane
              stanowisko.

            </p>
            <img className="networkImg" src={network} />
          </div>
          <div>
            <p className="mainContent">

              <br />
              <p style={{fontWeight: 'bold'}}> Automatyzacja procesów</p>
              <br />
              Aplikacja wychodzi naprzeciw oczekiwaniom, które stawiane są przez zespoły HR trudniące
              się rekrutacją w szczególności na dużą skalę. Wszystkie czynności wykonywane podczas
              typowej rekrutacji zostały maksymalnie zautomatyzowane przez co rekruterzy mogą skupić
              się na najważniejszej rzeczy jaką jest sam kandydat nie martwiąc się o stosy dokumentów.
            </p>

            <img className="networkImg " src={idea} />
          </div>
          <div>
            <p className="mainContent">
              <br />
              <p style={{fontWeight: 'bold'}}> Pomoc w legalizacji pracy </p>
              <br />

              Najważniejszą rzeczą podczas rekrutacji w szególności tej owocnej jest podpisanie
              stosownej umowy z kandydatem. Ten proces również został zautomatyzowany poprzez
              zastosowanie systemu “Thru-Sync”, który umożliwia przesłanie umowy bezpośrednio do
              kandydata.
            </p>
            <img className="networkImg " src={help} />
          </div>
        </div>

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
