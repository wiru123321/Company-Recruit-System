package com.polsl.proj.recruitmentsystem.facedes;

import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.DecissionDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.DecissionOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RateOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.DecissionRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class HeadRecruiterFacade {

    private JobApplicationRepository jobApplicationRepository;
    private DecissionRepository decissionRepository;


    public void addDecission(DecissionDTO dto) {
        JobApplication jobApplication = jobApplicationRepository.getByApplicationId(dto.getJobApplicationID());
        Decission decission = new Decission();
        decission.setDescription(dto.getDescription());
        decission.setResult(dto.getResult());
        decission.setJobApplication(jobApplication);
        decissionRepository.save(decission);
    }


    public List<JobOutDTO> getAll(){
        List<JobApplication> results = jobApplicationRepository.findAll();
        List<JobOutDTO> dtos = new LinkedList<>();
        for(JobApplication result: results){
            RecruitOutDTO recruitOutDTO = result.getRecruit().dto();
            DecissionOutDTO decissionOutDTO = result.getDecission().dto();
            RateOutDTO rateOutDTO = result.getRate().dto();
            dtos.add(new JobOutDTO(result.getPosition(),result.getStatus(),decissionOutDTO,rateOutDTO,recruitOutDTO));
        }
        return dtos;
    }

    // TODO Implement
}