package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.FullDecissionDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.JobOutDTO;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/head")
@CrossOrigin
@AllArgsConstructor
public class HeadRecruiterController {

    private final HeadRecruiterFacade headRecruiterFacade;

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
    public void addDecission(@RequestBody FullDecissionDTO dto){
        headRecruiterFacade.addDecission(dto);
    }



}
