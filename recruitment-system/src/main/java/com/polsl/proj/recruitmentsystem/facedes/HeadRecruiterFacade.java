package com.polsl.proj.recruitmentsystem.facedes;

import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.FullDecissionDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.DecissionOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RateOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Rate;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.DecissionRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.RateRepository;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Component;;

import java.util.LinkedList;
import java.util.List;

@Component
@AllArgsConstructor
public class HeadRecruiterFacade {


    private final JobApplicationRepository jobApplicationRepository;
    private final RateRepository rateRepository;
    private final DecissionRepository decissionRepository;


    public void addDecission(FullDecissionDTO dto) {
        JobApplication jobApplication = jobApplicationRepository.getByApplicationId(dto.getJobApplicationID());
        Decission decission = new Decission();
        decission.setDescription(dto.getDescription());
        decission.setResult(dto.getResult());
        decission.setJobApplication(jobApplication);
        Rate rate = new Rate();
        rate.setRate(dto.getRate());
        rate.setJobApplication(jobApplication);
        decissionRepository.save(decission);
        rateRepository.save(rate);
    }


    public List<JobOutDTO> getAll(){
        List<JobApplication> results = jobApplicationRepository.findAll();
        List<JobOutDTO> dtos = new LinkedList<>();
        for(JobApplication result: results){
            RecruitOutDTO recruitOutDTO = result.getRecruit().dto();
            DecissionOutDTO decissionOutDTO = (result.getDecission()!=null)? result.getDecission().dto(): new DecissionOutDTO();
            RateOutDTO rateOutDTO = (result.getRate()!=null) ? result.getRate().dto() : new RateOutDTO();
            dtos.add(new JobOutDTO(result.getPosition(),result.getStatus(),decissionOutDTO,rateOutDTO,recruitOutDTO));
        }
        return dtos;
    }

    // TODO Implement
}