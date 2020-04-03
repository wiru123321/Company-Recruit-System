package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.DecissionDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.JobOutDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/head")
@CrossOrigin
public class HeadRecruiterController {

    @Autowired
    HeadRecruiterFacade headRecruiterFacade;

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
