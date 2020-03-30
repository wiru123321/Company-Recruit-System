package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/head")
public class HeadRecruiterController {

    @Autowired
    HeadRecruiterFacade headRecruiterFacade;

    @Autowired
    RecruitRepository recruitRepository;    //TODO:Usunąć

    @GetMapping("/main")
    String headPage(){
        return "head/main";
    }

    @GetMapping("/allApplications")
    @ResponseBody
    List<Recruit> getAllApplications(){
        return  null;
    //return recruitRepository.getAll(); TODO:Podmienić
    }
}
