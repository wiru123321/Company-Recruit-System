package com.polsl.proj.recruitmentsystem.business.services.headRecruiter;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.NewRecrutationDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.EmployeeDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.DecissionOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RateOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.Rate;
import com.polsl.proj.recruitmentsystem.repositories.people.HeadRecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.DecissionRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.RateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.LinkedList;
import java.util.List;

@Service
@AllArgsConstructor
class HeadRecruiterService {

    private EntityManager entityManager;
    private final HeadRecruiterRepository headRecruiterRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final RateRepository rateRepository;
    private final DecissionRepository decissionRepository;
    private CriteriaBuilder builder;



    List<JobOutDTO> getFilteredJobApplications(SearchParametersDTO dto) {
        CriteriaQuery<JobApplication> query = builder.createQuery(JobApplication.class);
        Root<JobApplication> root = query.from(JobApplication.class);
        Predicate hasPosition,hasStatus,hasResult, hasRate;
        List<Predicate> predicates = new LinkedList<>();
        if (dto.getPosition() != null && !dto.getPosition().equals("")) {                        //TODO refactor if
            hasPosition = builder.equal(root.get("position"), dto.getPosition());
            predicates.add(hasPosition);
        }
        if (dto.getStatus() != null &&  !dto.getStatus().equals("")) {
            hasStatus = builder.equal(root.get("status"), dto.getStatus());
            predicates.add(hasStatus);
        }
        if (dto.getResult() != null) {
            hasResult = builder.equal(root.get("result"), dto.getResult());
            predicates.add(hasResult);
        }
        if (dto.getRate() != null) {
            hasRate = builder.equal(root.get("rate"), dto.getRate());
            predicates.add(hasRate);
        }
        Predicate last = builder.and(predicates.toArray(new Predicate[0]));
        query.where(last);
        return createJobOutDTOFromResult(entityManager.createQuery(query.select(root)).getResultList());
    }

     void addDecission(InputDecissionDTO dto) {
        JobApplication jobApplication = jobApplicationRepository.getByApplicationId(dto.getJobApplicationID());
        Decission decission = new Decission(dto.getResult(),dto.getDescription(),jobApplication);
        Rate rate = new Rate(dto.getRate(),jobApplication);
        decissionRepository.save(decission);
        rateRepository.save(rate);
    }


     HeadRecruiter findByName(String name) {
        if(headRecruiterRepository.findByFirstName(name).isPresent()) {
            return headRecruiterRepository.findByFirstName(name).get();
        }
        else {
            return null;
        }
    }

     List<JobOutDTO> getAllJobApplications() {
        List<JobApplication> results =   jobApplicationRepository.findAll();
        return createJobOutDTOFromResult(results);
    }

    private List<JobOutDTO> createJobOutDTOFromResult(List<JobApplication> results) {
        List<JobOutDTO> dtos = new LinkedList<>();
        for(JobApplication result: results){
            RecruitOutDTO recruitOutDTO = result.getRecruit().dto();
            DecissionOutDTO decissionOutDTO = (result.getDecission()!=null)? result.getDecission().dto(): new DecissionOutDTO();
            RateOutDTO rateOutDTO = (result.getRate()!=null) ? result.getRate().dto() : new RateOutDTO();
            dtos.add(new JobOutDTO(result.getApplicationId(), result.getPosition(),result.getStatus(),decissionOutDTO,rateOutDTO,recruitOutDTO));
        }
        return  dtos;
    }

     void startNewRecrutation(NewRecrutationDTO dto) {
        // TODO IMPLEMENT
    }

    List<EmployeeDTO> getAllHeadRecruiters() {
        List<HeadRecruiter> headRecruiters = headRecruiterRepository.findAll();
        List<EmployeeDTO> result = new LinkedList<>();
        for(HeadRecruiter headRecruiter: headRecruiters){
            EmployeeDTO dto = new EmployeeDTO(headRecruiter.getFirstName(),headRecruiter.getLastName(),null,"headrecruiter");
            result.add(dto);
        }
        return result;
    }
}
