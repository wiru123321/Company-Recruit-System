package com.polsl.proj.recruitmentsystem.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/head")
public class HeadRecruiterController {

    @GetMapping("/main")
    String headPage(){
        return "head/main";
    }
}
