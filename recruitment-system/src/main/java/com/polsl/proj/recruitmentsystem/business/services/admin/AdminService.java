package com.polsl.proj.recruitmentsystem.business.services.admin;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.EmployeeDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
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

    void addNewInternalEmployee(EmployeeDTO dto) {
        if (dto.getType().equals("recruiter")) {
            Recruiter recruiter = new Recruiter(dto.getFirstName(),dto.getLastName(),dto.getPassword(),true,"ROLE_USER",dto.getDepartment());
            recruiterRepository.save(recruiter);
        } else {
            HeadRecruiter headRecruiter = new HeadRecruiter(dto.getFirstName(),dto.getLastName(),dto.getPassword(),true,"ROLE_HEAD",dto.getDepartment());
            headRecruiterRepository.save(headRecruiter);
        }
    }
}
