package com.polsl.proj.recruitmentsystem.controllers;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.RecruiterDTO;
import com.polsl.proj.recruitmentsystem.business.services.AdminFacade;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class AdminController {
    private final AdminFacade adminFacade;

        @PostMapping("/addEmployee")
    public void addNewEmployee(@RequestBody RecruiterDTO dto) {
        adminFacade.addNewInternalEmployee(dto);
    }
}
