package com.polsl.proj.recruitmentsystem.business.services.admin;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.EmployeeDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.wrappers.EmployeesWrapper;
import com.polsl.proj.recruitmentsystem.business.services.headRecruiter.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.services.recruiter.RecruiterFacade;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class AdminFacade {

    private final AdminService adminService;
    private final HeadRecruiterFacade headRecruiterFacade;
    private final RecruiterFacade recruiterFacade;

    public Admin findByName(String name) {
        return adminService.findByName(name);
    }

    public void addNewInternalEmployee(EmployeeDTO dto) {
        adminService.addNewInternalEmployee(dto);
    }

    public EmployeesWrapper getAllEmployees() {
        List<EmployeeDTO> headRecruiters = headRecruiterFacade.getAllHeadRecruiters();
        List<EmployeeDTO> recruiters = recruiterFacade.getAllRecruiters();
        return new EmployeesWrapper(headRecruiters,recruiters);
    }

    public void deleteEmployee(String firstname) {
        boolean accountDeleted;
       accountDeleted = headRecruiterFacade.deleteHeadRecruiter(firstname);
       if(!accountDeleted){
           recruiterFacade.deleteRecruiter(firstname);
       }

    }

    public List<String> getAllDepartments() {
        return headRecruiterFacade.getAllDepartments();
    }
}