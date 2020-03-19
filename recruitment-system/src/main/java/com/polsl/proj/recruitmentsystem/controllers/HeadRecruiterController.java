package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.HeadRecruiterFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/head")
public class HeadRecruiterController {

    @Autowired
    HeadRecruiterFacade headRecruiterFacade;

    @GetMapping("/main")
    String headPage(){
        return "head/main";
    }
}
