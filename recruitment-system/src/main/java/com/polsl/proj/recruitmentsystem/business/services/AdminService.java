package com.polsl.proj.recruitmentsystem.business.services;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.RecruiterDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import com.polsl.proj.recruitmentsystem.repositories.people.AdminRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.HeadRecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruiterRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;
    private final HeadRecruiterRepository headRecruiterRepository;
    private final RecruiterRepository recruiterRepository;


    Admin findByName(String name) {
        if (adminRepository.findByFirstName(name).isPresent()) {
            return adminRepository.findByFirstName(name).get();
        } else {
            return null;
        }
    }

    void addNewInternalEmployee(RecruiterDTO dto) {
        if (dto.getType().equals("recruiter")) {
            Recruiter recruiter = new Recruiter();
            recruiter.setFirstName(dto.getFirstName());
            recruiter.setLastName(dto.getLastName());
            recruiter.setPassword(dto.getPassword());
            recruiter.setRoles("USER_ROLE");
            recruiter.setActive(true);
            recruiterRepository.save(recruiter);
        } else {
            HeadRecruiter headRecruiter = new HeadRecruiter();
            headRecruiter.setFirstName(dto.getFirstName());
            headRecruiter.setLastName(dto.getLastName());
            headRecruiter.setPassword(dto.getPassword());
            headRecruiter.setRoles("ROLE_HEAD");
            headRecruiter.setActive(true);
            headRecruiterRepository.save(headRecruiter);
        }
    }
}
