package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.RecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.FullApplicationDto;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.FullRecruitDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.TrainingDTO;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/recruiter")
public class RecruiterController {

    @Autowired
    RecruiterFacade recruiterFacade;

    @Autowired
    RecruitRepository recruitRepository;
    @Autowired


    @GetMapping("/main")
    String recruiterPage(){
        return "recruiter/main";
    }

    @PostMapping("/addFullRecruit")
    @ResponseBody
    public String addFullRecruit(@RequestBody FullRecruitDTO dto){     //TODO:Refactor
        recruiterFacade.addNewRecruit(dto);
        return "W bazie danych zapisano:"+ dto.getFirstName();
    }

    @PostMapping("/addFullApplication")
    @ResponseBody
    public String addFullApplication(@RequestBody FullApplicationDto dto){     //TODO:Refactor
        recruiterFacade.addNewApplication(dto);
        return "W bazie danych zapisano:"+ dto.getFirstName();
    }


    @PostMapping("/addTraining")
    public String addTraining(@RequestBody TrainingDTO dto){
        recruiterFacade.addTraining(dto);//TODO: Refactor
        return "recruiter/main";
    }
}
