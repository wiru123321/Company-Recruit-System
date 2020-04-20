package com.polsl.proj.recruitmentsystem.business.utils.PDF;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Component
 class ContractTemplate {

     String contractTitle(){
        return "UMOWA ZLECENIE";
    }

     String contractingPartiesInfo() {
         return "Zawarta w dniu  19.04.2020 pomiędzy RecruitmentSystem Sp. z o.o, ul.Starościńska 1, 82-200 Malbork, NIP: 6578930274819 reprezentowana przez kierownika działu kadr Jana Zatrudniacza, zwanego dalej Zleceniodawcą a Kasią Zatrudnianą, PESEL 380513875934 zwanej dalej Zleceniobiorcą na czas nieokreślony.";
    }

    List<String> employeeResponibilities() {
         List<String> responisbilities = new ArrayList<>();

        responisbilities.add("Wytwarzanie oprogramowania zgodnie z wymaganiami realizowanego projektu");
        responisbilities.add("Testowanie implementowanych funkcjonalności");
        responisbilities.add("Tworzenie dokumentacji technicznej");
        responisbilities.add("Refaktoryzacja i poprawa jakości instniejącego kodu");
        return responisbilities;
    }

    String employerObligations(){
         return "Za wykonywane efekty pracy Zleceniodawca zobowiązuje się wykonać przelew na konto Zleceniobiorcy wynagrodzenie w wysokości 28 złotych brutto za każdą przepracowaną godzinę zegarową, w przeciągu niedłuższym niż 7 dni od złożenia przez Zleceniobiorcę miesięcznego raportu czasu pracy.";
    }
}
