<h1><div style="text-align: center">Recruit System - dokumentacja techniczna </h1>

<div class="page-break"></div>

<div style="page-break-after: always; break-after: page;"></div>

<div style="page-break-after: always; break-after: page;"><b>1.Wstęp</b><br>
&emsp;1.1. Opis ogólny systemu............................................................................................3<br>   
<b>2.Opis funcjonalności systemu</b> <br>
&emsp;2.1. Strona główna<br>    
&emsp;2.2. Panel administratora systemu<br>
&emsp;&emsp;2.2.1. Przegląd pracowników<br>
&emsp;&emsp;2.2.2. Dodanie nowego pracownika do systemu<br>
&emsp;2.3. Panel rekrutera<br>
&emsp;&emsp;2.3.1. Przegląd rekrutów<br>
&emsp;&emsp;2.3.2. Dodanie nowego rekruta do systemu<br> 
&emsp;&emsp;2.3.3. Podgląd pomocniczy<br>
&emsp;2.4. Panel kierownika działu rekrutacji<br>
&emsp;&emsp;2.4.1. Przegląd i ocena aplikujących rekrutów<br> 
&emsp;&emsp;&emsp;2.4.1.1 Generowanie umowy w formacie PDF<br>
&emsp;&emsp;2.4.2. Przegląd i dodanie nowych wymagań rekrutacyjnych<br>     
<b>3.Opis architektury systemu</b><br>
&emsp;3.1. Diagram klas części backendowej<br>
&emsp;3.2. Diagram bazodanowy<br>
&emsp;3.3. Diagram klas części frontendowej<br>
&emsp;3.4. Diagram przypadków użycia<br>
&emsp;3.5. Diagram funkcyjny<br>
<b>4.Opis zastosowanych rozwiązań implementacyjnych</b><br>
&emsp;4.1. Komunikacja aplikacji z bazą danych<br>
&emsp;4.2. Komunikacja między warstwą frontnedową a backendową<br>
&emsp;4.3. Bezpieczeństwo systemu<br>
&emsp;4.4. Obsługa załączanych plików pdf<br>
&emsp;4.5. Generowanie pliku pdf z wartościami pobranymi z bazy danych<br>
<b>5. Architektura oprogramowania po stronie Frontendu.</b><br>
&emsp;5.1. Wykorzystane narzędzia.<br>
&emsp;5.2. CORS (Cross-Origin Resource Sharing).<br>
&emsp;5.3. Wykorzystane modele zarządzania stanem aplikacji, wraz z przykładem implementacji.<br>
&emsp;5.4. Przepływ sterowania.<br></div>


<div style="text-align: center"></div><h2>1.Wstęp</h2></div>

<h4>1.1. Opis ogólny </h4>

![](C:\Users\Mirosław Adamski\Downloads\Logo_exported_1.0.png)

<div style="text-align: justify;page-break-after: always; break-after: page;">Recruit System jest aplikacją webową przeznaczoną dla firm, które dążą do usprawnienia i usystematyzowania procesu rekrutacji. W tym celu system ten oferuje zbiór prostych w obsłudze rozwiązań, dzięki którym poszczególni rekruterzy mogą w szybki i łatwy sposób wprowadzić wszystkie niezbędne informacje dotyczące osoby ubiegającej się o zatrudnienie, a kierownicy poszczególnych działów rekrutacji mają możliwość precyzowania oczekiwań wobec poszukiwanych pracowników,wyboru najlepszego kandydata z opcją podglądu dostarczonego przez niego CV, dokanania oceny poszczególnych rekrutów oraz wygenerowania proponowanej umowy na podstawie parametryzowanego szablonu.W celu zapewnienia spójności działania utworzony został również panel admnistracyjny, w obrębie którego możliwe jest tworzenie i usuwanie kont dla osób zajmujących się rekrutacją.W celu ułatwienia pracy osobom rekrutującym, zarówno rekruterzy jak i szefowie działów rekrutacji mają wgląd jedynie do rekrutów aplikujących do zespołów zgodnych z zespołami, którymi opiekują się dani pracownicy działu HR. Oznacza to, że osoba odpowiedzialna za rekrutację pracowników do zespołu pracującego w języku Java będzie widziała jedynie osoby zainteresowane pracą na którymkolwiek stanowisku związanym z tym zespołem (np. testerów, deweloperów, PM'ów), jednak nie będzie mogła zobaczyć osoby ubiegające się o pracę w zespole C++ ze względu na założnie, że informacje te nie są jej potrzebne w codziennej pracy.</div>

<div style="text-align: center"></div><h2>2.Opis funcjonalności systemu</h2></div>

<h4>2.1. Strona główna</h4>
![](C:\Users\Mirosław Adamski\Pictures\main_page.JPG)
<div style="text-align: justify">Strona główna jest podstawową witryną, służącą za stronę powitalną. Zawiera ona krótki opis zawierający podstawowe informacje o zastosowaniu aplikacji Recruit System oraz formularz logowania, umożliwiający użytkownikowi zalogowanie się na swoje konto.Po poprawnym zweryfikowaniu użytkownika, zostaje on automatycznie przekierowany na przeznaczony dla niego panel.W przypadku wprowadzenia błędnych danych wyświetlana jest informacja "Podano błędny login lub hasło.".Strona główna jest jedyną dostępną dla niezalogowanego użytkownika.</div>

<h4>2.2. Panel administratora systemu</h4>
![](C:\Users\Mirosław Adamski\Pictures\admin-main.JPG)
<div style="text-align: justify">
   Domyślnym widokiem dostępnym po zalogowaniu na konto administratora systemu jest widoczna powyżej strona główna panelu administratora. Zawiera ona pasek nawigacyjny, wyposażony w trzy przyciski, kolejno:
    <li>Przeglądaj pracowników - przekierowujący do okna przeglądu pracowników odpowiedzialnych za rekrutację</li>
	<li>Dodaj pracownika - przekierowujący do formularza dodawania nowego pracownika do systemu</li>
    <li>Wyloguj - powodujący wylogowanie użytkownika i przekierowanie z powrotem na stronę główną</li></div>

<h4>2.2.1. Przegląd pracowników</h4>

![](C:\Users\Mirosław Adamski\Pictures\admin-search.JPG)

<div style="text-align: justify">Po przekierowaniu na okno przeglądu pracowników, administratorowi domyślnie wyświetlana jest lista wszystkich osób zatrudnionych we wszystkich działach rekrutacji. Prezentowane informacje to imię, nazwisko, rola (definiująca czy dana osoba jest rekruterem czy kierownikiem rekrutacji, opisywana odpowiednio jako 'recruiter' lub 'headrecruiter') oraz stanowisko rekrutacji, określające do jakiego działu rekrutacyjnego jest przypisana dana osoba. Dodatkowo do każdego elementu listy domieszczony jest przycisku "USUŃ", którego naciśnięcie powoduje usunięcie danego pracownika z systemu.W celu odfiltrowania pracowników według żądanych filtrów należy skorzystać z formularza znajdującego się po lewej stronie. Umożliwia on nałożenie filtrów na każdy z wyżej wymienionych pól, przy czym żaden z filtrów nie jest obowiązkowy. Po wprowadzeniu żądanych danych filtrujących należy nacisnąć przycisk "Filtruj". Spowoduje to wyświetlenie na liście jedynie osób spełniających podane kryteria.</div>

<h4>2.2.1. Dodanie nowego pracownika do systemu</h4>

![](C:\Users\Mirosław Adamski\Pictures\admin-add.JPG)

<div style="text-align: justify">Okno dodania nowego pracownika składa się z formularza służącego do wpisania niezbędnych informacji definiujących daną osobę. W celu poprawnego dodania nowego konta do bazy danych należy uzupełnić wszystkie pola formularza wpisując kolejno: imię, nazwisko, dział rekrutacji, hasło, potwierdzenie hasła oraz wybrać z listy rozwijanej stanowisko na jakim dana osoba ma pracować (do wyboru 'Rekruter' albo 'Kierownik rekrutacji'). Po wprowadzeniu wszystkich danych należy zatwierdzić je klikając przycisk "DODAJ". W przypadku pozostawienia pustym któregoś z pól, zostanie wyświetlony przy nim komunikat informujący, że należy je uzupełnić.</div>

<h4>2.3. Panel rekrutera</h4>

![](C:\Users\Mirosław Adamski\Pictures\recruiter-main.JPG)

<div style="text-align: justify">
    Strona główna dla rekrutera wygląda analogicznie jak strona administratora. Jedyna różnica polega na zawartości panelu nawigacyjnego, który tym razem składa się z:
    <li>Zarejestruj - okno umożliwiające dodanie kompletnych informacji o osobie ubiegającej się o pracę </li>
	<li>Wyszukaj - okno przeglądu rekrutów dodanych już do bazy danych</li>
    <li>Pomoc - strona zawierająca skrócony opis prawidłowego korzystania z powyższych aktywności</li>
    <li>Wyloguj - powodujący wylogowanie użytkownika i przekierowanie z powrotem na stronę główną</li>
</div>
<h4>2.3.1. Przegląd rekrutów</h4><br>
![](C:\Users\Mirosław Adamski\Pictures\recruiter search.JPG)
<div style="text-align: justify">
W przypadku przeglądania rekrutów, w przeciwieństwie do przeglądu pracowników przez administratora, domyślnie nie są pobierane żadne informacje z bazy danych, przez co po przejściu na te okno, rekruter zobaczy jedynie logo aplikacji oraz widoczny u góry zbiór pól służacych do zebrania parametrów filtrowania rekrutów. Uzupełnienie tych pól nie jest jednak obowiązkowe, a naciśnięcie przycisku "Szukaj" w takiej sytuacji pobierze wszystkich aplikantów jakich może zobaczyć dany rekruter. Po wykonaniu zapytania do bazy danych, pod polami filtracyjnymi wyświetlą się przyciski z imionemi i nazwiskami poszczególnych rekrutów. Ich naciśnięcie spowoduje pokazanie się pozostałych informacji (wykształcenie, szkolenia, doświadczenie zawodowe, umiejętności). Ponowne naciśnięcie takiego przycisku powoduje ukrycie dodatkowych informacji.</div>
<h4>2.3.2. Dodanie nowego rekruta do systemu</h4>
![](C:\Users\Mirosław Adamski\Pictures\recruiter - new.JPG)

<div style="text-align: justify">
Okno dodania nowego rekruta do systemu opiera się na formularzu, który należy uzupełnić następującymi danymi: Imie,Naziwsko,Stanowisko na którym chce pracować rekrut, Wykształcenie (oparte na liście rozwijanej, oferującej do wyboru wartości "Średnie","Zawodowe" oraz "Wyższe",Umiejętności,Szkolenia, Doświadczenie zawodowe oraz Dodatkowe pliki. Za wyjątkiem dodatkowych plików, wszystkie pozostałe pola są obligatoryjne. W przypadku umiejętności należy podać jej opis (np. "Znajomośc języka SQL") oraz wybrać z listy rozwijanej stopień, na jaki ocenił daną umiejętność rekrut - do wyboru są wartości "początkujący","średnio-zaawansowany","zaawansowany","ekspert".W przypadku szkoleń należy wpisać nazwę szkolenia (np. "Szkolenie z cyberbezpieczeństwa", jego krótki opis (np."Szkolenie dotyczło najczęstszych sposobów ataku na serwisy internetowe" oraz datę jego odbycia za pomocą dostępnego kalendarza.Analogicznie należy postąpić w przypadku dodawania doświadczenia zawodowego, poprzez wpisanie stanowiska na jakim pracował rekrut, oraz wybrania z kalendarzy daty początkowej oraz daty końcowej. W przypadku posiadania przez rekruta większej ilości umiejętności, odbytych szkoleń lub doświadczenia zawodowego na większej ilości stanowisk, należy nacisnąć przy każdym z nich przycisk "DODAJ", który spowoduje pojawienie się dodatkowych pól umożliwiających dodatnie kolejnych danych.Istnieje również możliwość usunięcia tak utworzonych dodatkowych pól przyciskiem "USUŃ". Nie możliwe jest jednak zupełne usunięcie tych pól i wymagane jest uzupełnienie przynajmniej jednego zestawu danych dla każdego z nich.W przypadku braku odpowiednich danych do wprowadzenia (np. rekrut nie odbył żadnych szkoleń) należy pola opisowe uzupełnić wartością "brak" a datę ustawić na aktualny dzień.Informacją niewymaganą jest sekcja "Dodatkowe pliki". Zawiera ona przycisk "Wybierz plik", po naciśnięciu którego otwiera się ekplorator Windows	w celu dołączenia odpowiedniego pliku. Aby wysłać kompletne informacje o pracowniku należy nacisnąć przycisk "Zatwierdź"</div>

<h4>2.3.3. Podgląd pomocniczy</h4>

![](C:\Users\Mirosław Adamski\Pictures\recruiter help.JPG)

<div style="text-align: justify">Okno "Pomoc" jest najprostszym z dostępnych dla rekrutera - zawiera ono opis tekstowy pozostałych funkcjonalności.

<h4>2.4. Panel kierownika działu rekrutacji</h4>
<h4>2.4.1. Przegląd i ocena aplikujących rekrutów</h4>
<h4>2.4.1.1 Generowanie umowy w formacie PDF</h4>
<h4>2.4.2. Przegląd i dodanie nowych wymagań rekrutacyjnych</h4>  
<div style="text-align: justify">
    Opis heada
</div>

<h4>3.Opis architektury systemu</h4>
<h4>3.1. Diagram klas części backendowej</h4>
<h4>3.2. Diagram bazodanowy</h4>
<h4>3.3. Diagram klas części frontendowej</h4>
<h4>3.4. Diagram przypadków użycia</h4>
<h4>3.5. Diagram funkcyjny</h4>
<h4>4.Opis zastosowanych rozwiązań implementacyjnych</h4>
<h4>4.1. Komunikacja aplikacji z bazą danych</h4>
<div style="text-align: justify">Informacje na temat wykorzystywanej bazy danych zostały zawarte w pliku application.properties. Znajduje się tam adres bazy danych, dane potrzebne do uwierzytelniania oraz inne niezbędne parametry, takie jak dialekt bazy.Wartości te są automatycznie pobierane przez aplikację w momencie jej uruchomienia.Obsługa części bazodanowej została zaimplementowana z wykorzystaniem frameworka Hibernate. Tabele bazodanowe są reprezentowane w kodzie za pomocą klas opatrzonych adnotacją @Entity. Każda taka klasa zawiera pole typu long, odpowiadające za reprezentowanie ID w bazie danych. Pola te są opisane przez adotację @ID oraz  @GeneratedValue(strategy = GenerationType.AUTO) oznaczające, że generowanie wartości ID przy dodawaniu nowej encji do bazy danych jest realizowane w sposób domyślnie wykorzystywany przez serwer bazodanowy. W zależności od potrzeb wynikających z logiki działania aplikacji, niektóre klasy zawierają również mapowania, wiążące ich encje z encjami innych tabel. Do zastosowanych mapowań należą @OneToOne oraz @ManyToOne z @OneToMany. W celu optymalizacji zarządzania bazą danych, mapowania opierają się na połączeniu bikierunkowym, w którym jedna z tabel zawiera wartości id encji z drugiej tabeli.W ten sposób udało się wyeliminować tworzenie się w bazie danych dodatkowych tabel, odpowiadających jedynie za reprezentowanie połączeń między encjami.Dodatkowo, przy każdym mapowaniu zastosowano pełną kaskadowość bazodanową oraz uwzględniono usuwanie osieroconych encji zależnych.Za komunikację z bazą danych odpowiadają implementacje interfejsu JpaRepository.Każde repozytorium przyjmuje jako parametry: nazwę encji na której operuje oraz Long, jako format przechowywania ID w bazie danych.W wielu przypadkach w sposób jawny zostało zdefiniowane zapytanie do bazy danych, wykorzystując adnotację @Query, jednak w przypadkach, gdzie było to możliwe wykorzystano domyślne zapytania realizowane przez JpaRepository.Przed wysłaniem danych na część frontendową, pobrane encje są konwertowane na DTO, przez co pliki JSON nie zawierają oryginalnych encji, lecz jedynie wyciągnięty z nich zbiór potrzebnych inforamcji.</div>
<h4>4.2. Komunikacja między warstwą frontnedową a backendową</h4>
<div style="text-align: justify">Komunikacja między częścią frontendowa a backendową odbywa się za pomocą klas opatrzonych adnotacją @RestController oraz @CrossOrigin, umożliwiającej komunikację aplikacjami wystawionymi na różnych poratach.
<h4>4.3. Bezpieczeństwo systemu</h4>
<div style="text-align: justify">Bezpieczeństwo aplikacji zostało zrealizowane poprzez wykorzystanie rozwiązań oferowanych przez Spring Security, polegających na zaszyfrowanie hasła każdego użytkownika, sprawdzanie uprawnień przy wysyłaniu żądań do serwera (przykładowo rekruter próbując przejść do okna kierownika rekrutacji dostanie informację o braku uprawnień, podobnie osoba niezalogowana nie będzie miała dostępu do żadnej funkcjonalności systemu za wyjątkiem formularza logowania). W szczególnym przypadku jakim jest generowanie umowy dla wybranego rekruta wymagana jest ponowna autentyfikacja poprzez ponowne wpisanie loginu oraz hasła.</div>
<h4>4.4. Obsługa załączanych plików pdf</h4>
<h4>4.5. Generowanie pliku pdf z wartościami pobranymi z bazy danych</h4>

<h4>5. Architektura oprogramowania po stronie Frontendu.</h4>

<div style="text-align: justify">Całość aplikacji odpowiadająca za frontend jest zrealizowana w frameworku React.js. Architektura strony internetowej to tzw SPA, czyli Single Page App.
React dostarcza bardzo wygodne narzędzia do implementowania asynchronicznej nawigacji i dynamicznym ładowaniu treści serwisu.
</div>
<h4>5.1. Wykorzystane narzędzia.</h4>

<div style="text-align: justify"><b>React Router</b> – narzędzie wspomagające routing po stronie internetowej. Wspomaga SPA poprzez nadzorowanie ładowania wybranych treści w sposób asynchroniczny.
<b>Formik</b> – narzędzie służące do tworzenia formularzy oraz ich obsługi (walidacja, obsługa zdarzeń). Głównymi zaletami Formika jest łatwość w dostępie do wartości przechowywanych przez pola, walidacja danych, informowanie o błędach i pomoc w obsłudzę zdarzeń.

<b>Axios</b> – klient http dla przeglądarek i NodeJS, oparty o promise’y. Pozwala na formowanie requestów i obsługę odpowiedzi. Axios automatycznie transformuje dane do postaci łańcuchu znaków oraz pozwala na konfigurację requestów za pomocą funkcji dostarczanych przez tzw. interceptors.

<h4>5.2. CORS (Cross-Origin Resource Sharing).</h4>
<div style="text-align: justify">
<b>Cross-Origin</b> - w aplikacji serwery odpowiadające za frontend i backend znajdują się w innych domenach. Requesty wysłane z frontendu, dobierane są przez serwer na którym znajduje się REST API. Aby serwery mogły się skontaktować należy umożliwić wykrycie Originu serwera Frontendu na serwerze z backendem. Tej operacji dokonuje się konfigurując odpowiednie kontrolery REST API.
</div>

<h4>5.3. Wykorzystane modele zarządzania stanem aplikacji, wraz z przykładem implementacji.</h4>

<h5>1. Props drilling.</h1>

<div style="text-align: justify">Props drilling polega na przesyłanie stanu w dół drzewa komponentów, za pomocą odpowiednich właściwości (props). Komponenty potomne odbierają te właściwości, a programista może się do nich odwołać wykorzystując **props.nazwaWłaściwości** .
Zaletą tego rozwiązania jest prostota. W praktyce props-drilling przypomina przekazywanie kaskadowo, odpowiednich wartości do przygotowanych wcześniej funkcji (tutaj komponentów). Dla niewielkich drzew komponentów jest to rozwiązanie o czytelnej architekturze i małej zawiłości wyprodukowanego kodu.
Z props-drilling’u należy zdecydowanie zrezygnować w sytuacji, gdy spodziewamy się przekazywania danych, przez duże ilości warstw drzewa komponentów, wynoszenia stanu w górę (callback do rodzica), bądź wielu komponentów potomnych. 
Poniższy przykład prezentuje przykładowe wykorzystanie props-drillingu.
Komponent TrafficLight jest najwyżej w hierarchii drzewa komponentów i przechowuje on stan aktualnie wybranego światła. Poprzez “propsy” przekazywane są funkcje zmieniające wybrany kolor oraz cyfra opisująca wybrany kolor.
</div>



```react

 class TrafficLight extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      // 0 - red, 1 - orange, 2- green
      currentColorNumber: 0,
    };
    this.incrementColor = this.incrementColor.bind (this);
    this.decrementColor = this.decrementColor.bind (this);
  }
 
  incrementColor () {
    if (this.state.currentColorNumber + 1 < 3)
      this.setState (state => ({
        currentColorNumber: state.currentColorNumber + 1,
      }));
  }
 
  decrementColor () {
    if (this.state.currentColorNumber > 0)
      this.setState (state => ({
        currentColorNumber: state.currentColorNumber - 1,
      }));
  }
 
  render () {
    return (
      <div>
        <Light color={this.state.currentColorNumber} />
        <LightsController
          increment={this.incrementColor}
          decrement={this.decrementColor}
        />
      </div>
    );
  }
}

```

<div style="text-align: justify">Komponent Light odpowiada za zapalenie odpowiedniego światła na podstawie przekazanego przez props stanu.</div>

```react
const Light = props => {
  return (
    <div>
      {props.color === 0 &&
        <div><a style={{padding: '4px', backgroundColor: 'red'}} /></div>}
      {props.color === 1 &&
        <div><a style={{padding: '4px', backgroundColor: 'orange'}} /></div>}
      {props.color === 2 &&
        <div><a style={{padding: '4px', backgroundColor: 'green'}} /></div>}
    </div>
  );
};

```

<div style="text-align: justify">Natomiast komponent LightsController wywołuje metody zaimplementowane w klasie TrafficLight. Zbindowanie metod w komponencie TrafficLight pozwala na wykorzystanie ich, w celu zmiany stanu komponentu TrafficLight w innym komponencie. Jest to również przykład przekazywania funkcji przez props’y.</div>

```react
const LightsController = props => {
  return (
    <div>
      <button
        onClick={event => {
          event.preventDefault ();
          props.increment ();
        }}
      >
        INKREMENTUJ
      </button>
      <button
        onClick={event => {
          event.preventDefault ();
          props.decrement ();
        }}
      >
        DEKREMENTUJ
      </button>
    </div>
```



<h5>2. Context API.</h5>

<div style="text-align: justify">Context API jest dostępne od wersji React v16.3.0. Jest to funkcjonalność wspierająca zarządzanie stanem komponentu oraz komunikację między komponentami.
Zamysł tej architektury przybliża poniższy schemat.</div>

<div  style="text-align: justify">Zamysł tej architektury przybliża poniższy schemat.</div>

![img](F:\REPOS\PP\Web-app.RecruitSystem\Documentation\Etap-6\context)



Elementy potomne danej funkcjonalności tworzone są w obszarze zasięgu jej kontekstu (kolor czerwony). Kontekst jest dostarczany do każdego potomka (Child Components kolor zielony) przez Context Provider. Przypomina to trochę korzystanie z globalnego magazynu (a nawet zmiennych globalnych), jednak kontekst można łatwo enkapsulować dostarczając go do wybranych komponentów potomnych.Takie działanie nazywane jest owijaniem (ang. wrapping). 

Kontekst tworzy się w sposób pokazany poniżej (createContext należy zaimportować z ‘react’).

```react
const AppContext = createContext ();
```

Następnie należy stworzyć ContextProvider. Stan kontekstu (someData) po owinięciu jest dostępny w każdym elemencie potomnym.

```react
const AppContextProvider = () => {
  // Stan w obszarze kontekstu
  const [someData, setSomeData] = useState ();

  return (
    <div>
      {/* Owijanie potomków przez Conext */}
      <AppContext.Provider>
        <ChildComponents />
      </AppContext.Provider>
    </div>
  );
};
```

Poniżej znajduje się przykład odbierania stanu w komponencie potomnym.

```react
const ChildComponent = () => {
  const {someData, setSomeData} = useContext (AppContext);
};
```

<h4>5.4. Przepływ sterowania.</h4>

Poniżej znajdują sie schematy przepływu sterowania na 4 głównych stronach (Login, Recruiter, Head, Admin). Strona Logowania odpowiada za przekierowanie użytkownika na odpowiednią stronę oraz walidację logowania. Natomiast reszta wyszczególnionych stron odpowiada, za dostarczenie mechanizmów pozwalających na wykonanie użytkownikowi odpowiedniej pracy.

<h5>1. Przepływ sterowania pomiędzy użytkownikami.</h5>



![](F:\REPOS\PP\Web-app.RecruitSystem\Documentation\Etap-6\Przepływ sterowania pomiędzy userami.png)





<h5>2. Przepływ sterowania na stronie rekrutera.</h5>



![Przepływ sterowania rekrutera](F:\REPOS\PP\Web-app.RecruitSystem\Documentation\Etap-6\Przepływ sterowania rekrutera.png)





<h5>3. Przepływ sterowania na stronie kierownika rekrutacji(head recruiter).</h5>



![Sterowanie head_rekrut](F:\REPOS\PP\Web-app.RecruitSystem\Documentation\Etap-6\Sterowanie head_rekrut.png)





<h5>4. Przepływ sterowanie na stronie administratora.</h5>



![Przepływ sterowania admin](F:\REPOS\PP\Web-app.RecruitSystem\Documentation\Etap-6\Przepływ sterowania admin.png)