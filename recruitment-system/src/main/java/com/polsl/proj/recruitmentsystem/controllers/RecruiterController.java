package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.RecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.*;
import com.polsl.proj.recruitmentsystem.model.people.Recruit;
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

    @GetMapping("/main")
    String recruiterPage(){
        return "recruiter/main";
    }

    @PostMapping("/addFullRecruit")
    @ResponseBody
    public String addFullRecruit(@RequestPart FullRecruitDTO dto,@RequestPart FullRecruitDTO dto2){     //TODO:Refactor
        recruiterFacade.addNewRecruit(dto);
        return "W bazie danych zapisano:"+ dto.getFirstName();
    }

    @PostMapping("/addFullApplication")
    @ResponseBody
    public String addFullApplication(@RequestPart RecruitDTO recruitDTO, @RequestPart RecruitAttributesDTO attributesDTO){     //TODO:Refactor
        System.out.println("aaaa");
        return "ok";    //TODO: Refactor
    }


    @PostMapping("/addTraining")
    public String addTraining(@RequestBody TrainingDTO dto){
        recruiterFacade.addTraining(dto);//TODO: Refactor
        return "recruiter/main";
    }
}
