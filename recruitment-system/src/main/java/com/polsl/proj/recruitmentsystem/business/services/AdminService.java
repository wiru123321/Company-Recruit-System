package com.polsl.proj.recruitmentsystem.business.services;

import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.repositories.people.AdminRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;

    public Admin findByName(String name) {
        if(adminRepository.findByFirstName(name).isPresent()) {
            return adminRepository.findByFirstName(name).get();
        }
        else {
            return null;
        }
    }
}
