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
import com.polsl.proj.recruitmentsystem.business.utils.file.FileUtility;
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
    private final RecruiterService service;
    private final RecruiterRepository recruiterRepository;
    private final FileUtility fileUtils;


    public void addNewApplication(RecruitDTO recruitDTO, InputRecruitAttributesDTO attributesDTO) {
       service.addNewApplication(recruitDTO,attributesDTO);
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
        return recruiterRepository.findByFirstName(name).get();
    }

    public void saveFile(MultipartFile file) throws Exception {
        fileUtils.save(file, 0);
    }
}
