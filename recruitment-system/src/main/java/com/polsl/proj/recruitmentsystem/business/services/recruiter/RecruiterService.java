package com.polsl.proj.recruitmentsystem.business.services.recruiter;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.EmployeeDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputRecruitAttributesDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.RecruitDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersFINAL;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.DecissionOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RateOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.SkillPOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Education;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.EmpolymentExperience;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Skill;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.business.utils.file.FileUtility;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.EducationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.ExperienceRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.SkillRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.TrainingRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
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
public class RecruiterService {

    private final RecruitRepository recruitRepository;
    private final TrainingRepository trainingRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final RecruiterRepository recruiterRepository;
    private final EntityManager entityManager;
    private CriteriaBuilder builder;

    boolean addNewApplication(RecruitDTO recruitDTO, InputRecruitAttributesDTO attributesDTO) {
        Recruit recruit = new Recruit();
        recruit.setLastName(recruitDTO.getLastName());
        recruit.setFirstName(recruitDTO.getFirstName());
        recruitRepository.save(recruit);
        saveEducations(attributesDTO.getEducationDegrees(), recruit);
        saveSkills(attributesDTO.getSkills(), recruit);
        saveTrainings(attributesDTO.getTrainings(), recruit);
        saveExperience(attributesDTO.getExperiences(), recruit);
        JobApplication jobApplication = new JobApplication("Refactor", "nierozpatrzony",recruitDTO.getDepartment(), recruit);
        jobApplicationRepository.save(jobApplication);
        return true;
    }


    private void saveExperience(List<ExperiencePOJO> experiencePOJOS, Recruit recruit) {
        for (ExperiencePOJO experienceValue : experiencePOJOS) {
            EmpolymentExperience experience = new EmpolymentExperience(experienceValue.getDateFrom(), experienceValue.getDateTo(), experienceValue.getPosition(), recruit);
            experienceRepository.save(experience);
        }

    }

    private void saveTrainings(List<com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO> trainings, Recruit recruit) {
        for (com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO trainingValue : trainings) {
            Training training = new Training(trainingValue.getTrainingName(), "opisRefactor", trainingValue.getTrainingDate());
            training.setRecruit(recruit);
            trainingRepository.save(training);
        }
    }

    private void saveSkills(List<SkillPOJO> skills, Recruit recruit) {
        for (SkillPOJO skillValue : skills) {
            Skill skill = new Skill();
            skill.setSkillName(skillValue.getSkillName());
            skill.setSkillLevel(skillValue.getSkillLevel());
            skill.setRecruit(recruit);
            skillRepository.save(skill);
        }
    }

    private void saveEducations(List<String> educations, Recruit recruit) {
        for (String educationValue : educations) {
            Education education = new Education();
            education.setDegree(educationValue);
            education.setRecruit(recruit);
            educationRepository.save(education);
            recruit.addEducation(education);
        }
    }


    List<JobOutDTO> findAllMatching(SearchParametersFINAL dto) {
        Map<String, Object> predicatesValues = createPredicatesMap(dto);
        builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<JobApplication> query = builder.createQuery(JobApplication.class);
        Root<JobApplication> root = query.from(JobApplication.class);
        List<Predicate> predicates = new LinkedList<>();
        for (Map.Entry<String, Object> entry : predicatesValues.entrySet()) {
            predicates.add(builder.equal(root.get(entry.getKey()), entry.getValue()));
        }
        Predicate last = builder.and(predicates.toArray(new Predicate[0]));
        query.where(last);
        return createJobOutDTOFromResult(entityManager.createQuery(query.select(root)).getResultList());
    }

    private List<JobOutDTO> createJobOutDTOFromResult(List<JobApplication> results) {
        List<JobOutDTO> dtos = new LinkedList<>();
        for (JobApplication result : results) {
            RecruitOutDTO recruitOutDTO = result.getRecruit().dto();
            DecissionOutDTO decissionOutDTO = (result.getDecission() != null) ? result.getDecission().dto() : new DecissionOutDTO();
            RateOutDTO rateOutDTO = (result.getRate() != null) ? result.getRate().dto() : new RateOutDTO();
            dtos.add(new JobOutDTO(result.getApplicationId(), result.getPosition(), result.getStatus(), decissionOutDTO, rateOutDTO, recruitOutDTO));
        }
        return dtos;
    }

    void addTraining(TrainingPOJO dto) {
        Training training = new Training(dto.getTrainingName(), dto.getTrainingDescription(), dto.getTrainingDate());
        Recruit recruit = recruitRepository.findById(dto.getRecruitID());
        recruit.addTraining(training);
        trainingRepository.save(training);
    }

    Recruiter findByName(String name) {
        return recruiterRepository.findByFirstName(name).get();
    }

    List<EmployeeDTO> getAllRecruiters() {
        List<Recruiter> recruiters = recruiterRepository.findAll();
        List<EmployeeDTO> result = new LinkedList<>();
        for (Recruiter recruiter : recruiters) {
            EmployeeDTO dto = new EmployeeDTO(recruiter.getFirstName(), recruiter.getLastName(), null, "recruiter",recruiter.getDepartment());
            result.add(dto);
        }
        return result;
    }


    private Map<String, Object> createPredicatesMap(SearchParametersFINAL dto) {
        Map<String, Object> result = new HashMap<>();
        result.put("first_name", dto.getFirstName());
        result.put("last_name", dto.getLastName());
        result.put("position", dto.getPosition());
        result.put("status", dto.getStatus());
        result.put("result", dto.getResult());
        result.put("rate", dto.getRate());
        while (result.values().remove(null)) ;
        return result;
    }


    /* PARAMETRYZOWANE SZUKANIE - ZAPASOWY ORYGINAŁ */
    List<JobOutDTO> findAllMatchingOLD(SearchParametersFINAL dto) {
        builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<JobApplication> query = builder.createQuery(JobApplication.class);
        Root<JobApplication> root = query.from(JobApplication.class);
        Predicate hasFirstName, hasLastName, hasPosition, hasStatus, hasResult, hasRate;
        List<Predicate> predicates = new LinkedList<>();
        if (dto.getFirstName() != null && !dto.getFirstName().equals("")) {
            hasFirstName = builder.equal(root.get("first_name"), dto.getFirstName());
            predicates.add(hasFirstName);
        }
        if (dto.getLastName() != null && !dto.getLastName().equals("")) {
            hasLastName = builder.equal(root.get("last_name"), dto.getLastName());
            predicates.add(hasLastName);
        }
        if (dto.getPosition() != null && !dto.getPosition().equals("")) {                        //TODO refactor if
            hasPosition = builder.equal(root.get("position"), dto.getPosition());
            predicates.add(hasPosition);
        }
        if (dto.getStatus() != null && !dto.getStatus().equals("")) {
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
}
