import React from "react";

import "../../css/HeadRecruiterPage.css";

class HelpComponent extends React.Component {
  render() {
    return (
      <div>
        <div
          className="helpOptionRecruit"
          style={{ width: "80vw", height: "40%", margin: "auto" }}
        >
          <p
            className="helpTitleRecruit"
            style={{ fontSize: "3vh", lineHeight: "100%" }}
          >
            <b>Przeglądanie oferty zatrudnienia.</b>
          </p>
          <p
            className="helpContentRecruit"
            style={{ fontSize: "3vh", lineHeight: "100%" }}
          >
            Aby przejrzeć oferty zatrudnienia należy wybrać zakładkę "Przeglądaj
            oferty zatrudnienia". W tej zakładce możemy wyszukiwać wszystkie
            osoby dodane przez rekruterów do danego stanowiska oraz rozpatrywać
            ich aplikacje. Wystarczy uzupełnic pole "stanowisko" oby wyświetlić
            wszyskie osoby, które chcą dostać prace na tym stanowisku. Można
            również wyszukać konktetnej osoby po imieniu i nazwisku.
          </p>
        </div>
        <div
          className="helpOptionRecruit"
          style={{ width: "80vw", height: "40%", margin: "5% auto " }}
        >
          <p
            className="helpTitleRecruit"
            style={{ fontSize: "3vh", lineHeight: "100%" }}
          >
            <b>Dodawanie ofert zatrudnienia.</b>
          </p>
          <p
            className="helpContentRecruit"
            style={{ fontSize: "3vh", lineHeight: "100%" }}
          >
            Aby dodać nową oferte zatrudnienia trzeba wypełnić formularz w
            zakładce "Dodaj ofertę zatrudnienia". Wpisać stanowisko, na które
            rekrutacja ma być prowadzona, ilość osób ile ma być zatrudnionych
            oraz szczegółowy opis stanowiska. W zakładce u góry strony
            "Przeglądaj oferty" można obejrzeć dodane oferty pracy, na które
            szukani są pracownicy.
          </p>
        </div>
      </div>
    );
  }
}

export default HelpComponent;
