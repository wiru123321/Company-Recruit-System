package com.polsl.proj.recruitmentsystem.business.services;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.DecissionOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RateOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.Rate;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.DecissionRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.RateRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
}