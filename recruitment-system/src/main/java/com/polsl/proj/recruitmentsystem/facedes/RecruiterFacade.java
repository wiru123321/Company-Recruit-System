package com.polsl.proj.recruitmentsystem.facedes;


import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.*;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.POJOs.SkillPOJO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.POJOs.TrainingPOJO;
import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Education;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.EmpolymentExperience;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Skill;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.EducationRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.ExperienceRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.SkillRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.TrainingRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class RecruiterFacade {

    @Autowired // Autowired jest wymagany dla POSTMAN / INSOMNIA
    public RecruitRepository recruitRepository;
    @Autowired
    public TrainingRepository trainingRepository;
    @Autowired
    public JobApplicationRepository jobApplicationRepository;
    @Autowired
    public EducationRepository educationRepository;
    @Autowired
    public SkillRepository skillRepository;
    @Autowired
    public ExperienceRepository experienceRepository;


    public void addNewRecruit(FullRecruitDTO dto) {
        Training training = new Training();
        training.setDate(dto.getTrainingDate());
        training.setDescription(dto.getDescription());
        training.setName(dto.getTrainingName());
        trainingRepository.save(training);
        Recruit recruit = new Recruit();
        recruit.setFirstName(dto.getFirstName());
        recruit.setLastName(dto.getLastName());
        recruit.addTraining(training);
        recruitRepository.save(recruit);
    }

    public void addNewApplication(RecruitDTO recruitDTO, RecruitAttributesDTO attributesDTO) {
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

    private void saveTrainings(List<TrainingPOJO> trainings, Recruit recruit) {
        for (TrainingPOJO trainingValue : trainings) {
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

    public void addTraining(TrainingDTO dto) {
        Training training = new Training();
        training.setDate(dto.getDate());
        training.setDescription(dto.getDescription());
        training.setName(dto.getName());
        Recruit recruit = recruitRepository.findById(dto.getRecruitID());
        recruit.addTraining(training);
        trainingRepository.save(training);
    }
}
