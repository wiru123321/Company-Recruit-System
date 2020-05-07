import React from 'react';

class HelpComponent extends React.Component {
  render () {
    return <div>
        <div><h1>Witaj na stronie rekrutera</h1></div>
        <div className="helpComponentDivRecruit">
          <div className="helpOptionRecruit">
            <p className="helpTitleRecruit"><b>Dodawanie nowych kandydatów.</b></p>
            <p className="helpContentRecruit">Aby dodać nowego kandydata należy wybrać zakładkę "Zarajestruj" 
              z panelu widocznego po lewej stronie. Następnie wypełnić formulaż
              danymi zgodnymi z aplikacją kandydata. W polu "kursy" nie jest konieczne
              wpisanie danych gdyż kandytat nie musi posiadać kursów, to samo tyczy się pola 
              "Doświadczenie zawodowe". Gdy wszystkie dane zostaną uzupełnionę, konieczne jest 
              załadowanie pliku z CV do systemu poprzez guzik "Upload".
              Na końcu wystarczy kliknąć guzik "Zatwierdź" aby potwierdzić wprowadzone dane.
            </p>
            </div>
         <div className="helpOptionRecruit">
           <p className="helpTitleRecruit"><b>Wyszukiwanie kandydatów.</b></p>
           <p className="helpContentRecruit">Aby wyszukać dodanego do bazy danych kandydata 
           należy wpisać jego imię i nazwisko i nacisnąć guzik "Filtruj". Jeżeli chcemy wyszukać 
           kandydatów po innych cechach, na przykłąd odbytych kursach lub doświadczeniu zawodowemu,
           należy kliknąć guzik "Zaawansowane filtry" i w polach, po których chcemy wyszukać kandydatów 
           wpisać interesujące nas wartości. Po uzupełnieniu "Zaawansowanych filtrów" ponownie trzeba kliknąć
           guzik "Filtruj".
           </p>
           </div>
         </div>
          
      </div>;
  }
}

export default HelpComponent;
