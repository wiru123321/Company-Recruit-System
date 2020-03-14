package com.polsl.proj.recruitmentsystem;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FirstController {

    @GetMapping("/main")
    String mainPage(){
        return "main";
    }
}
