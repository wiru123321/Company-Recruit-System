

##              Recruitment System - dokumentacja etapu 3

<h4>1.Wykorzystane narzędzia</h4>

<h5>1.1. AnyDesk

<div style="text-align:justify">W trakcie realizacji tego etapu rozwoju naszego projektu doszło do sytuacji, w której zdecydowaliśmy się na wykorzystanie programu AnyDesk - jest to intuicyjne i łatwe w obsłudze narzędzie, pozwalające na równoczesną pracę na tym samym komputerze osobie korzystającej z niego lokalnie, oraz osobie pracującej zdalnie. Pozwoliło nam to w łatwy sposób rozwiązać problemy, które pojawiły się w trakcie pracy.</div>

<h5> 1.2. Kdiff3 </h5>

<div style="text-align:justify"> Kdiff3 jest popularnym narzędziem do rozwiązywania konfliktów w kontroli wersji git. Jego użycie było konieczne, ponieważ pomimo dbania o komunikację i koordynację w naszym zespole, doszło do sytuacji, w której dwie osoby postanowiły niezależnie od siebie naprawić ten sam błąd. W wyniku tego należało porównać oba rozwiązania i wybrać jedno z nich - zadanie to ułatwiło nam narzędzie do merge'owania Kdiff3, oferujące w czytelny sposób porównanie różnic i wybranie ostatecznej wersji.

<h4>2.Wykorzystane rozwiązania implementacyjne</h4>

<h5>1.1. iText </h5>

<div style="text-align:justify">iText jest to zewnętrzna biblioteka języka Java, udostępniająca interface umożliwiający generowanie plików PDF. Nasza decyzja dotycząca jej wyboru zapadła po dokonaniu analizy porównawczej kilku możliwych sposobów wygenerowania takiego pliku, w wyniku której stwierdziliśmy, że biblioteka iText najlepiej spełnia nasze obecne potrzeby - jest zarówno łatwa w implementacji, jak i również szybko wykonuje potrzebne operacje, dzięki czemu użytkownik naszej aplikacji nie będzie musiał długo oczekiwać na gotowy do pobrania plik.

<div style="text-align:justify">Sposób implementacji generowania pliku pdf:</div>

1. Dependencje które należy umieścić w pliku pom.xml :

```xml
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itextpdf</artifactId>
    <version>5.5.10</version>
</dependency>
<dependency>
    <groupId>org.apache.pdfbox</groupId>
    <artifactId>pdfbox</artifactId>
    <version>2.0.4</version>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>testcontainers</artifactId>
    <version>1.10.6</version>
    <scope>compile</scope>
</dependency>
```

2. Kod komponentu generującego dokument:

   ```java
   @Component
   @AllArgsConstructor
   public class PDFUtility {
   
       ContractTemplate contractTemplate;
   
       public ByteArrayInputStream createSimplePDFFile() {
           Document document = new Document();
           ByteArrayOutputStream out = new ByteArrayOutputStream();
           Font headFont = FontFactory.getFont(FontFactory.TIMES_ROMAN, 25, Font.BOLD);
           try {
               PdfWriter.getInstance(document, out);
           } catch (DocumentException e) {
               e.printStackTrace();
           }
           BaseFont helvetica = null;
           try {
               helvetica = BaseFont.createFont(BaseFont.HELVETICA, BaseFont.CP1250, 	`													BaseFont.EMBEDDED);
           } catch (DocumentException | IOException e) {
               e.printStackTrace();
           }
           Font standardFont = new Font(helvetica, 12);
           Font boldFont = new Font(helvetica, 12,Font.BOLD);
           Font smallFont = new Font(helvetica, 9);
   
   
           Paragraph chunk = new Paragraph("NAZWA DOKUMENTU", headFont);
           insertEmptyLines(2, chunk);
           chunk.setAlignment(Element.ALIGN_CENTER);
           Paragraph chunk2 = new Paragraph("Przykładowy tekst", standardFont);
           chunk2.setAlignment(Element.ALIGN_JUSTIFIED);
           insertEmptyLines(3, chunk2);
   
           Chunk bullet = new Chunk("\u2022");
           List list = new List(List.UNORDERED);
           list.setListSymbol(bullet);
   
           for (String responsibility : contractTemplate.employeeResponibilities()) {
               list.add(responsibility);
           }
   
           document.open();
           try {
               document.add(chunk);
               document.add(chunk2);
               document.add(list);
           } catch (DocumentException e) {
               e.printStackTrace();
           }
           document.close();
           return new ByteArrayInputStream(out.toByteArray());
       }
       
       private void insertEmptyLines(int count, Paragraph paragraph) {
           for (int i = 0; i < count; i++) {
               paragraph.add(new Paragraph(" "));
           }
       }
   }
   ```

   

   <div style="text-align:justify">Powyższy wycinek kodu przedstawia sposób tworzenia prostego dokumnetu tekstowego składającego się z dwóch fregmentów tekstu oraz listy nienumerowanej. W metodzie <b>createSimplePDFFile()</b> tworzony jest obiekt klasy Document, do którego zapisywane są kolejne elementy mające zawierać się w pliku, oraz obiekt ByteArrayOutputStream, umożliwiający konwersję dokumentu do postaci, którą da będzie dało się przekazać w ResponseEntity kontrolera (omówione niżej).Następnie definiowane są czcionki jakie mają być wykorzystane w  dokumencie - należy zwrócić uwagę na dwa sposoby ich tworzenia. W przypadku gdy nie wymagane są znaki specjalne (np. polskie znaki 'ą','ś','ż' itd.), można użyć prostszej metody polegającej na wykorzystaniu FontFactory. Sposób ten przedstawia tworzenie czcionki headFont.<br></div>

   <div style="text-align:justify">Niestety rozwiązanie to nie sprawdza się dla wspomnianych znaków specjalnych. W takiej sytuacji należy wykorzystać dwuetapowe tworzenie czcionki, z wykorzystaniem funkcjonalności klasy BaseFont.Umożliwia ona bardziej szczegółowe zdefiniowanie parametrów czcionki, w tym sposób kodowania. Dla polskich znaków należy wykorzystać kodowanie CP1250. Po takim zdefiniowaniu czcionki szablonowej wystarczy ją wykorzystać w konstruktorze obiektu klasy Font, którego chcemy użyć w dokumencie, analogicznie jak dla obiektów standardFont,boldFont lub smallFont z powyższego fragmentu kodu.</div>

   <div style="text-align:justify">Tworzenie fragmentów tekstu odbywa się poprzez:
       <ol>
          <li>Stworzenie obiektu klasy Paragraph przymującego w konstruktorze fragment tekstu oraz czcionkę.</li>
           <li>Dodanie do danego obiektu nowych paragrafów zawierających puste linie - służą one do oddzielenia poszczególnych akapitów tekstu. W tym celu najlepiej stowrzyć własną metodę, aby nie powielać. W zaprezentowanym kodzie jest to metoda insertEmptyLines()</li>
           <li>Zdefiniować sposób formatowania tekstu - w powyższym przykładzie  zaprezentowany wyśrodkowanie oraz wyjustowanie tekstu - służy do tego metoda setAlignment(Element.TYP_FORMATOWANIA), należąca do klasy Paragraph. Przyjmuje ona jeden argument - wartość liczbową opisywaną przez interface Element. Zadaniem progrmisty jest wybrać z dostępnych w tym interface zmiennej opisującej żądane formatowanie np. Element.ALIGN_CENTER.</li>
       </ol>
   </div>

   ​    

   <div style="text-align:justify">Tworzenie listy odbywa się poprzez:
       <ol>
          <li>Stworzenie obiektu klasy List przymującego w konstruktorze wartość definiującą jej rodzaj. W przykładzie zastosowano List.UNORDERED aby uzyskać listę nienumerowaną.</li>
           <li>Dla listy nienumerowanej należy zdefiniować symbol kolejnych elementów listy - robi się to tworząc obiekt klasy Chunk, przyjmującym kod reprezentujący symbol. </li>
           <li>Po stworzeniu symbolu, należy przypisać go do listy metodą setListSymbol(symbol).</li>
                   <li>Dodawanie kolejnych punktów listy odbywa się poprzez wywołanie metody add należącej do obiektu klasy List. W powyższym kodzie linijki tekstu będące przypisane do każdego punktu listy są pobierane z klasy słownikowej (omówiona niżej).</li>
       </ol>
   </div>

   <div style="text-align:justify">Wszystkie stworzone elementy mające tworzyć dokument - zarówno obiekty klasy Paragraph jak i List dodaje się do dokumentu podając je jako argumenty metody add, należącej do obiektu klasy Document.
   Aby zwrócić plik z całą jego zawartością należy posłużyć się klasą ByteInputArrayStream, przyjmującą jako argument ByteArray stworzony przez PdfWriter na podstawie obiektu klasy Document.</div>

    3.Klasa słownikowa do przechowywania tekstu:

   <div style="text-align:justify">Aby oddzielić logikę budowania pliku od wartości tekstowych jakie mają się w nim znaleźć należy zastosować klasę złożoną z metod, zwracających odpowiednie fragmenty tekstu:</div>

   ```java
   @Getter
   @Setter
   @AllArgsConstructor
   @Component
    class ContractTemplate {
   
        String contractTitle(){
           return "TESKT TEKST";
       }
   
        String contractingPartiesInfo() {
            return "Przykładowy teskt.";
       }
   
       List<String> employeeResponibilities() {
            List<String> responisbilities = new ArrayList<>();
   
           responisbilities.add("Pierwszy element listy");
           responisbilities.add("Drugi element listy");
           responisbilities.add("Trzeci element listy");
           responisbilities.add("Czwarty element listy");
           return responisbilities;
       }
   }
   ```

   ​	 4.Zwracanie pliku przez kontroler:

   ```java
   @GetMapping(value = "/generatePDF")
   @ResponseBody
   public ResponseEntity<InputStreamResource> generatePDF() {
       ByteArrayInputStream bis = pdfUtility.createSimplePDFFile();
       var headers = new HttpHeaders();
       headers.add("attachment", "inline; filename=umowa.pdf");
       return ResponseEntity
               .ok()
               .headers(headers)
               .contentType(MediaType.APPLICATION_PDF)
               .body(new InputStreamResource(bis));
   }
   ```

   <div style="text-align:justify"> Metoda ta pobiera z opisywanej wcześniej klasy tworzącej dokument tekstowy efekt jej pracy. Następnie definiuje headery dla protokołu HTTP. Podane jako argumnety wartości definiują, że przesyłana zawartość jest załącznikiem (attachment), oraz definiuje nazwę pliku (filename=umowa.pdf). W zwracanym ResponseEntity spakowane są: status odpowiedzi HTTP 200 (ok), opisane nagłówki, informacja o rozszerzeniu przesyłanego pliku, podana w argumencie contentType(MediaType.RODZAJ_PLIKU), oraz ostatecznie sam plik. Wywołanie endpoint'a dla tej metody spowoduje otwarcie w przeglądarce nowej karty, zawierającej gotowy do pobrania dokument pdf.</div>







​		