package com.polsl.proj.recruitmentsystem;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class FirstController {

    @GetMapping("/main")
    String mainPage() {
        return "main";
    }

    @PostMapping("/login")
    String userWelcome() {
        return "Welcome";
    }
}
