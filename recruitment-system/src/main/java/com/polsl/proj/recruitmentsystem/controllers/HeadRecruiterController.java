package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.DecissionDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/head")
public class HeadRecruiterController {

    @Autowired
    HeadRecruiterFacade headRecruiterFacade;

    @Autowired
    RecruitRepository recruitRepository;    //TODO:Usunąć

    @Autowired
    JobApplicationRepository jobApplicationRepository;    //TODO:Usunąć

    @GetMapping("/main")
    String headPage(){
        return "head/main";
    }

    @GetMapping("/allApplications")
    @ResponseBody
    List<JobOutDTO> getAllApplications(){
       return headRecruiterFacade.getAll();
    }

    @PostMapping("/addDecission")
    public void addDecission(@RequestBody DecissionDTO dto){
        headRecruiterFacade.addDecission(dto);

    }



}
