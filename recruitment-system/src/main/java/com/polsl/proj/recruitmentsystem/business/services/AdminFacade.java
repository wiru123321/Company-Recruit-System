package com.polsl.proj.recruitmentsystem.business.services;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.RecruiterDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class AdminFacade {

    private final AdminService adminService;



    public Admin findByName(String name) {
        return adminService.findByName(name);
    }

    public void addNewInternalEmployee(RecruiterDTO dto) {
        adminService.addNewInternalEmployee(dto);
    }
}