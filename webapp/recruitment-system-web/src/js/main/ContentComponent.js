import React from 'react';
import '../../css/MainPage.css';
import network from '../../resources/network.png';
import idea from '../../resources/idea.png';
import help from '../../resources/help.png';

class ContentComponent extends React.Component {
  render () {
    return (
      <div>
        <div class="row info">
          <div class="col-8">
            <p>
              Proces rekrutacji jest związany z gromadzeniem znacznej ilości danych związanych głównie
              z nadesłanymi CV. Aplikacja wspiera duże oraz małe przedsiębiorstwa pomagając
              zarządzać całym etapem rekrutacji odciążając tym samym zespół HR. Należy również
              zadbać o bezpieczeństwo danych osobowych. Obecnie wykorzystywanie wyłącznie arkuszy
              kalkulacyjnych czy e-maili odchodzi w przeszłość. Informacje dotyczące kandydatów
              powinny być dla pracowników HR przejrzyste, co usprawni proces rekrutacji. Istotne jest to
              zwłaszcza w przypadku, kiedy mamy do czynienia z dużą liczbą aplikacji na dane
              stanowisko.
            </p>
          </div>
          <div class="col-4 ">
            <img className="logo" src={network} />
          </div>
        </div>

        <div class="row info">
          <div class="col-4 ">
            <img className="logo" src={idea} />
          </div>
          <div class="col-8">
            <p>
              Aplikacja wychodzi naprzeciw oczekiwaniom, które stawiane są przez zespoły HR trudniące
              się rekrutacją w szczególności na dużą skalę. Wszystkie czynności wykonywane podczas
              typowej rekrutacji zostały maksymalnie zautomatyzowane przez co rekruterzy mogą skupić
              się na najważniejszej rzeczy jaką jest sam kandydat nie martwiąc się o stosy dokumentów.
            </p>
          </div>
        </div>

        <div class="row info">
          <div class="col-8">
            <p>
              Najważniejszą rzeczą podczas rekrutacji w szególności tej owocnej jest podpisanie
              stosownej umowy z kandydatem. Ten proces również został zautomatyzowany poprzez
              zastosowanie systemu “Thru-Sync”, który umożliwia przesłanie umowy bezpośrednio do
              kandydata.
            </p>
          </div>
          <div class="col-4 ">
            <img className="logo" src={help} />
          </div>
        </div>
        <div class="row footer">
          <div class="col-12">
            <footer>
              © 2020 - System Obsługi Rekrutacji
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentComponent;
