package com.polsl.proj.recruitmentsystem.business.services.headRecruiter;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.*;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.DecissionOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RateOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.Rate;
import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
import com.polsl.proj.recruitmentsystem.repositories.people.HeadRecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.DecissionRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.RateRepository;
import com.polsl.proj.recruitmentsystem.repositories.recrutationProcesses.RecrutationProcessesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
class HeadRecruiterService {

    private EntityManager entityManager;
    private final HeadRecruiterRepository headRecruiterRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final RateRepository rateRepository;
    private final DecissionRepository decissionRepository;
    private final RecrutationProcessesRepository recrutationProcessesRepository;
    private final RecruitRepository recruitRepository;
    private CriteriaBuilder builder;


    List<JobOutDTO> getFilteredJobApplications(SearchParametersFINAL dto, String name) {
        Map<String, Object> predicatesValues = createPredicatesMap(dto, name);
        CriteriaQuery<JobApplication> query = builder.createQuery(JobApplication.class);
        Root<JobApplication> root = query.from(JobApplication.class);
        List<Predicate> predicates = new LinkedList<>();
        for (Map.Entry<String, Object> entry : predicatesValues.entrySet()) {
            predicates.add(builder.equal(root.get(entry.getKey()), entry.getValue()));
        }
        Predicate last = builder.and(predicates.toArray(new Predicate[0]));
        query.where(last);
        return createJobOutDTOFromResult(entityManager.createQuery(query.select(root)).getResultList(),dto.getFirstName(),dto.getLastName());
    }

    void addDecission(InputDecissionDTO dto) {
        JobApplication jobApplication = jobApplicationRepository.getByApplicationId(dto.getJobApplicationID());
        Decission decission = new Decission(dto.getResult(), dto.getDescription(), jobApplication);
        Rate rate = new Rate(dto.getRate(), jobApplication);
        decissionRepository.save(decission);
        rateRepository.save(rate);
    }


    HeadRecruiter findByName(String name) {
        if (headRecruiterRepository.findByFirstName(name).isPresent()) {
            return headRecruiterRepository.findByFirstName(name).get();
        } else {
            return null;
        }
    }

    List<JobOutDTO> getAllJobApplicationsForHeadRecruiter(String name) {
        String department = headRecruiterRepository.getDepartmentForUser(name);
        List<JobApplication> results = jobApplicationRepository.findAllByDepartment(department);
        return createJobOutDTOFromResult(results, "","");
    }

    private List<JobOutDTO> createJobOutDTOFromResult(List<JobApplication> results, String firstName, String lastName) {
        List<JobOutDTO> dtos = new LinkedList<>();
        for (JobApplication result : results) {
            RecruitOutDTO recruitOutDTO = result.getRecruit().dto();
            if (!recruitOutDTO.getFirstName().equals(firstName) && !firstName.equals("") || (!recruitOutDTO.getLastName().equals(lastName) && !lastName.equals(""))){
                continue;
            }
            DecissionOutDTO decissionOutDTO = (result.getDecission() != null) ? result.getDecission().dto() : new DecissionOutDTO();
            RateOutDTO rateOutDTO = (result.getRate() != null) ? result.getRate().dto() : new RateOutDTO();
            dtos.add(new JobOutDTO(result.getApplicationId(), result.getPosition(), result.getStatus(), decissionOutDTO, rateOutDTO, recruitOutDTO));
        }
        return dtos;
    }

    void startNewRecrutation(NewRecrutationDTO dto, String name) {
        String department = headRecruiterRepository.getDepartmentForUser(name);
        RecrutationProcess recrutationProcess = new RecrutationProcess(dto.getPosition(),dto.getDescription(), dto.getMaxHires(), department);
        recrutationProcessesRepository.save(recrutationProcess);

    }

    List<EmployeeDTO> getAllHeadRecruiters() {
        List<HeadRecruiter> headRecruiters = headRecruiterRepository.findAll();
        List<EmployeeDTO> result = new LinkedList<>();
        for (HeadRecruiter headRecruiter : headRecruiters) {
            EmployeeDTO dto = new EmployeeDTO(headRecruiter.getFirstName(), headRecruiter.getLastName(), null, "headrecruiter", headRecruiter.getDepartment());
            result.add(dto);
        }
        return result;
    }

    private Map<String, Object> createPredicatesMap(SearchParametersFINAL dto, String name) {
        Map<String, Object> result = new HashMap<>();
        String department = headRecruiterRepository.getDepartmentForUser(name);
        result.put("position", dto.getPosition());
        result.put("status", dto.getStatus());
 //       result.put("result", dto.getResult());
        result.put("rate", dto.getRate());
        result.put("department", department);
        while (result.values().remove(null)) ;
        while (result.values().remove("")) ;
        return result;
    }

     String getDepartmentForHeadRecruiter(String name) {
        return headRecruiterRepository.getDepartmentForUser(name);
    }

    boolean deleteHeadRecruiter(String firstname) {
        return headRecruiterRepository.deleteByFirstname(firstname) > 0;
    }

     String findRecruitByID(Long id) {
         String result="empty";
        try {
             result = recruitRepository.findById(id).getCvFilename();
        }
        catch (NullPointerException e){
            e.printStackTrace();
        }
        return result ;
    }
}
