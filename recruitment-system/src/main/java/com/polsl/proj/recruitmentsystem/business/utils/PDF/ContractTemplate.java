package com.polsl.proj.recruitmentsystem.business.utils.PDF;

import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ContractPOJO;
import com.polsl.proj.recruitmentsystem.business.services.headRecruiter.HeadRecruiterFacade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Component
class ContractTemplate {

    private String salary = "10";
    private String personalDetails = "Imie Nazwisko";
    private String hiringEmployee= "Imie Nazwisko";
    private String employmnetType;
    private String duration =  "na czas nieokreślony.";
    @Autowired
    private  HeadRecruiterFacade headRecruiterFacade;

    void contractTitle(String contract) {
        switch (contract) {
            case "zlecenie": {
                employmnetType = "UMOWA ZLECENIA";
                break;
            }
            case "praca": {
                employmnetType = "UMOWA O PRACE";
                break;
            }
            case "dzielo": {
                employmnetType = "UMOWA O DZIELO";
                break;
            }
            case "staz": {
                employmnetType = "UMOWA O STAZ";
                break;
            }
            default: {
                employmnetType = "PUSTA UMOWA";
                break;
            }
        }
    }

    String contractingPartiesInfo() {
        return "Zawarta w dniu  19.04.2020 pomiędzy RecruitmentSystem Sp. z o.o, ul.Starościńska 1, 82-200 Malbork, NIP: 6578930274819 reprezentowana przez kierownika działu kadr "+hiringEmployee+", zwanego dalej Zleceniodawcą a "+ personalDetails +" PESEL 380513875934 zwanej dalej Zleceniobiorcą "+ duration;
    }

    List<String> employeeResponibilities() {
        List<String> responisbilities = new ArrayList<>();

        responisbilities.add("Wytwarzanie oprogramowania zgodnie z wymaganiami realizowanego projektu");
        responisbilities.add("Testowanie implementowanych funkcjonalności");
        responisbilities.add("Tworzenie dokumentacji technicznej");
        responisbilities.add("Refaktoryzacja i poprawa jakości instniejącego kodu");
        return responisbilities;
    }

    String employerObligations() {
        return "Za wykonywane efekty pracy Zleceniodawca zobowiązuje się wykonać przelew na konto Zleceniobiorcy wynagrodzenie w wysokości " + this.salary + " złotych brutto za każdą przepracowaną godzinę zegarową, w przeciągu niedłuższym niż 7 dni od złożenia przez Zleceniobiorcę miesięcznego raportu czasu pracy.";
    }

    String warnings() {
        return "Zleceniodawca zastrzega sobie prawo do natychmiastowego zerwania umowy w przypadku dokonania przez Zleceniobiorcę któregoś z następujących zachowań: kradzież własności intelektualnej (udostępnianie osobom trzecim kodu źródłowego, sposobów imprementacji, szczegółów projektowych lub innych informacji mogących działać na szkodę Zleceniodawcy), wykazywanie uprzedzeń wobec innyc pracowników (seksizm,homofobia,rasizm,ksenofobia) w działaniach i/lub słowach, umyślne niszczenie mienia Zleceniodawcy, oraz inne czyny łąmiące zabronione przez Kodeks Karny Rzeczypospolitej Polskiej.";
    }

    public void selectOptions(ContractPOJO dto, String name) {
        String lastName = headRecruiterFacade.findByName(name).getLastName();
        this.hiringEmployee = name+" "+lastName;
        this.salary = dto.getSalary();
        this.personalDetails=dto.getFirstName()+" "+dto.getLastName();
        this.contractTitle(dto.getContract());
        if(!dto.getDateFrom().equals("") && !dto.getDateTo().equals("")){
            duration = "w okresie od "+dto.getDateFrom()+" do "+dto.getDateTo();
        }
    }
}
