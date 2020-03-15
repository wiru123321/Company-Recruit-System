package com.polsl.proj.recruitmentsystem.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/recruiter")
public class RecruiterController {

    @GetMapping("/main")
    String recruiterPage(){
        return "recruiter/main";
    }
}
