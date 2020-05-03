package com.polsl.proj.recruitmentsystem.business.services;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.NewRecrutationDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
@AllArgsConstructor

public class HeadRecruiterFacade {

    private final HeadRecruiterService headRecruiterService;

    public void addDecission(InputDecissionDTO dto) {
        headRecruiterService.addDecission(dto);
    }

    public List<JobOutDTO> getAll(){
        return headRecruiterService.findAll();
    }

    public List<JobOutDTO> getFiltered(SearchParametersDTO dto) {
        return headRecruiterService.getFilteredJobApplications(dto);
    //    return createJobOutDTOFromResult(results);
    }

    public HeadRecruiter findByName(String name) {
        return headRecruiterService.findByName(name);
    }

    public void startNewRecrutation(NewRecrutationDTO dto) {
       // headRecruiterService.startNewRecrutation(dto);
    }
}