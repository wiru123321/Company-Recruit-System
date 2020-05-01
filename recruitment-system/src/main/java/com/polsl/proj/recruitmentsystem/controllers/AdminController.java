package com.polsl.proj.recruitmentsystem.controllers;

import com.polsl.proj.recruitmentsystem.business.services.AdminFacade;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final AdminFacade adminFacade;

    @PostMapping("/addEmployee")
    public String addNewEmployee(){
        return " ok";
    }
}
