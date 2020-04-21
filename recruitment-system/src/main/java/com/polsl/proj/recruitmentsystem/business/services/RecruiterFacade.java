package com.polsl.proj.recruitmentsystem.business.services;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.*;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.SkillPOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Education;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.EmpolymentExperience;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Skill;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.EducationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.ExperienceRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.SkillRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.TrainingRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Component
@AllArgsConstructor
public class RecruiterFacade {

    // Autowired jest wymagany dla POSTMAN / INSOMNIA  up: final tez dziala
    private final RecruitRepository recruitRepository;
    private final TrainingRepository trainingRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final RecruiterRepository recruiterRepository;

    private final String serverUrl = "F:\\serwer\\files";

    public void addNewRecruit(RecruitDTO dto) {
        /*Training training = new Training();
        training.setDate(dto.getTrainingDate());
        training.setDescription(dto.getDescription());
        training.setName(dto.getTrainingName());
        trainingRepository.save(training);*/
        Recruit recruit = new Recruit();
        recruit.setFirstName(dto.getFirstName());
        recruit.setLastName(dto.getLastName());
        //recruit.addTraining(training);
        recruitRepository.save(recruit);
    }

    public void addNewApplication(RecruitDTO recruitDTO, InputRecruitAttributesDTO attributesDTO) {
        Recruit recruit = new Recruit();
        recruit.setLastName(recruitDTO.getLastName());
        recruit.setFirstName(recruitDTO.getFirstName());
        recruitRepository.save(recruit);
        saveEducations(attributesDTO.getEducationDegrees(), recruit);
        saveSkills(attributesDTO.getSkills(), recruit);
        saveTrainings(attributesDTO.getTrainings(), recruit);
        saveExperience(attributesDTO.getExperiences(), recruit);
        JobApplication jobApplication = new JobApplication();
        jobApplication.setStatus("nierozpatrzony");
        jobApplication.setPosition("Refactor");
        jobApplication.setRecruit(recruit);
        jobApplicationRepository.save(jobApplication);

    }

    private void saveExperience(List<ExperiencePOJO> experiencePOJOS, Recruit recruit) {
        for (ExperiencePOJO experienceValue : experiencePOJOS) {
            EmpolymentExperience experience = new EmpolymentExperience();
            experience.setPosition(experienceValue.getPosition());
            experience.setDateFrom(experienceValue.getDateFrom());
            experience.setDateTo(experienceValue.getDateTo());
            experience.setRecruit(recruit);
            experienceRepository.save(experience);
        }

    }

    private void saveTrainings(List<com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO> trainings, Recruit recruit) {
        for (com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO trainingValue : trainings) {
            Training training = new Training();
            training.setName(trainingValue.getTrainingName());
            training.setDescription(trainingValue.getTrainingDescription());
            training.setDate(trainingValue.getTrainingDate());
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

    public void addTraining(TrainingPOJO dto) {
        Training training = new Training();
        training.setDate(dto.getTrainingDate());
        training.setDescription(dto.getTrainingDescription());
        training.setName(dto.getTrainingName());
        Recruit recruit = recruitRepository.findById(dto.getRecruitID());
        recruit.addTraining(training);
        trainingRepository.save(training);
    }

    public Recruiter findByName(String name) {
        return  recruiterRepository.findByFirstName(name).get();
    }

    public void saveFile(MultipartFile file) throws Exception{
        byte[] bytes = file.getBytes();
        Path path = Paths.get(serverUrl+file.getOriginalFilename());
        Files.write(path,bytes);
    }
}
