package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.SearchParametersDTO;
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

    @PostMapping("/parametrizedApplications")
    @ResponseBody
    List<JobOutDTO> getParametrizedApplications(@RequestPart SearchParametersDTO dto){      //TODO Zmienić na RequestBody
        return headRecruiterFacade.getFiltered(dto);
    }

    @PostMapping("/addDecission")
    public void addDecission(@RequestBody InputDecissionDTO dto){
        headRecruiterFacade.addDecission(dto);
    }
}
