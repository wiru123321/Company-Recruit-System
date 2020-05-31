package com.polsl.proj.recruitmentsystem.business.services.headRecruiter;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.*;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
import com.polsl.proj.recruitmentsystem.business.services.recrutationProcesses.RecrutationProcessFacade;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class HeadRecruiterFacade {

    private final HeadRecruiterService headRecruiterService;
    private final RecrutationProcessFacade recrutationProcessFacade;

    public void addDecission(InputDecissionDTO dto) {
        headRecruiterService.addDecission(dto);
    }

    public List<JobOutDTO> getAllJobApplicationsForHeadRecruiter(String name) {
        return headRecruiterService.getAllJobApplicationsForHeadRecruiter(name);
    }

    public List<JobOutDTO> getFiltered(SearchParametersFINAL dto, String name) {
        return headRecruiterService.getFilteredJobApplications(dto, name);
    }

    public HeadRecruiter findByName(String name) {
        return headRecruiterService.findByName(name);
    }

    public void startNewRecrutation(NewRecrutationDTO dto, String name) {
        headRecruiterService.startNewRecrutation(dto, name);
    }

    public List<EmployeeDTO> getAllHeadRecruiters() {
        return headRecruiterService.getAllHeadRecruiters();
    }

    public boolean deleteHeadRecruiter(String firstname) {
        return headRecruiterService.deleteHeadRecruiter(firstname);
    }

    public List<RecrutationProcess> getAllRecrutationProcesses(String name) {
        String department = headRecruiterService.getDepartmentForHeadRecruiter(name);
        return recrutationProcessFacade.getAllRecrutationProcesses(department);
    }

    public String findRecruitByID(Long id) {
       return headRecruiterService.findRecruitByID(id);
    }

    public List<String> getAllDepartments() {
        return headRecruiterService.getAllDepartments();
    }
}