package com.polsl.proj.recruitmentsystem.controllers;

import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO;
import com.polsl.proj.recruitmentsystem.business.services.recruiter.RecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;


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

    @PostMapping("/addFullApplication")
    @ResponseBody
    public String addFullApplication(@RequestPart RecruitDTO recruitDTO, @RequestPart InputRecruitAttributesDTO attributesDTO,Principal principal){
        recruiterFacade.addNewApplication(recruitDTO,attributesDTO);
        return "ok";
    }

    @PostMapping("/addFiles")
    @ResponseBody
    public String addFiles(@RequestParam MultipartFile file){
            recruiterFacade.saveFile(file);
            return  "OK";
    }

    @PostMapping("/getRecruitInfo")
    @ResponseBody
    public List<JobOutDTO> getAllMatchingRecruits(@RequestBody SearchParametersFINAL dto, Principal principal){
        String name = principal.getName();
        return recruiterFacade.findAllMatchingRecruits(dto,name);
    }
}
