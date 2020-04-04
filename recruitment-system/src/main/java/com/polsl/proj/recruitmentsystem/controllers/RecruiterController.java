package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.RecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/recruiter")
@CrossOrigin
@AllArgsConstructor
public class RecruiterController {

    private final RecruiterFacade recruiterFacade;

    @GetMapping("/main")
    String recruiterPage(){
        return "recruiter/main";
    }

    @PostMapping("/addFullRecruit")
    @ResponseBody
    public String addFullRecruit(@RequestPart FullRecruitDTO dto){
        recruiterFacade.addNewRecruit(dto);
        return "W bazie danych zapisano:"+ dto.getFirstName();
    }

    @PostMapping("/addFullApplication")
    @ResponseBody
    public String addFullApplication(@RequestPart RecruitDTO recruitDTO, @RequestPart RecruitAttributesDTO attributesDTO){
        recruiterFacade.addNewApplication(recruitDTO,attributesDTO);
        return "ok";    //TODO: Refactor
    }

    @PostMapping("/addTraining")
    public String addTraining(@RequestBody TrainingDTO dto){
        recruiterFacade.addTraining(dto);
        return "recruiter/main";
    }
}
